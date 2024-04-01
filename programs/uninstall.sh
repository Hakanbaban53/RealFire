#!/usr/bin/env bash

# Set theme directory
THEMEDIRECTORY=$(cd `dirname "$0"` && cd .. && pwd);

# Default paths
FIREFOXFOLDER=""
APPLICATIONFOLDER=""

# Determine operating system
os_type=$(uname -s)

# Set paths based on operating system
if [ "$os_type" == "Darwin" ]; then
    FIREFOXFOLDER=~/Library/Application\ Support/Firefox/
    APPLICATIONFOLDER='/Applications/Firefox.app/Contents/MacOS/Firefox/'
else
    FIREFOXFOLDER=/home/$USER/.mozilla/firefox/
    APPLICATIONFOLDER='/usr/lib*/firefox/'
fi

CHROMEFOLDER="chrome";

# Get installation options
while getopts 'b:f:p:eh' flag; do
    case "${flag}" in
        b) APPLICATIONFOLDER="${OPTARG}" ;;
        f) FIREFOXFOLDER="${OPTARG}" ;;
        p) PROFILENAME="${OPTARG}" ;;
        e) FXACEXTRAS=false ;;
        h)
            echo "RealFire! Uninstall script usage: ./uninstall.sh [ options ... ]"
            echo "where options include:"
            echo
            echo "  -b <binary_folder>  (Set custom Firefox binary folder path)"
            echo "  -f <firefox_folder> (Set custom Firefox folder path)"
            echo "  -p <profile_name>   (Set custom profile name)"
            echo "  -e                  (Install fx-autoconfig - Runs sudo to copy mozilla.cfg and local-settings.js to Application Binary folder)"
            echo "  -h                  (Show help message)"
            exit 0
            ;;
    esac
done

# Check if Firefox profiles.ini is installed or not
PROFILES_FILE="${FIREFOXFOLDER}/profiles.ini"
if [ ! -f "${PROFILES_FILE}" ]; then
    >&2 echo "Failed to locate profiles.ini in ${FIREFOXFOLDER}
Exiting..."
    exit 1
fi

echo
echo "Profiles file found..."


# Define default Profile folder path else use -p option
if [ -z "$PROFILENAME" ]; then
    PROFILEFOLDER="${FIREFOXFOLDER}/$(grep -zoP '\[Install.*?\]\nDefault=\K(.*?)\n' $PROFILES_FILE | tr -d '\0')"
else
    PROFILEFOLDER="${FIREFOXFOLDER}/${PROFILENAME}"
fi


# Enter Firefox profile folder if it exists
if [ ! -d "$PROFILEFOLDER" ]; then
    >&2 echo "Failed to locate Profile folder at ${PROFILEFOLDER}
Exiting..."
    exit 1
fi

cd $PROFILEFOLDER

# Confirm uninstallation
read -p "This will remove RealFire! theme and associated configuration files. Are you sure? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then


    # Remove RealFire! theme folder if it exists
    if [ -d "${CHROMEFOLDER}" ]; then
        rm -rf "${CHROMEFOLDER}"
    fi

    # Remove user.js symbolic link
    if [ -f "../user.js" ]; then
        rm "$../user.js"
    fi

    # Restore backup of user.js if exists
    if [ -f "../user.js.bak" ]; then
        mv ../user.js.bak ../user.js || { exit 1; }
    fi

    echo "Removing mozilla.cfg, local-settings.js, config.js and config-pref.js from ${APPLICATIONFOLDER}"
    chmod +x "${PWD}/programs/uninstall-cfg.sh"
    sudo "${PWD}/programs/uninstall-cfg.sh" ${APPLICATIONFOLDER} || { echo "Exiting..."; exit 1; }

    echo "RealFire! theme and associated configuration files have been removed."
else
    echo "Uninstallation aborted."
fi
