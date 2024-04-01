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

# Confirm uninstallation
read -p "This will remove RealFire! theme and associated configuration files. Are you sure? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Remove RealFire! theme folder
    rm -rf "${FIREFOXFOLDER}/${CHROMEFOLDER}"

    # Remove user.js symbolic link
    rm "${FIREFOXFOLDER}/user.js"

    # Remove backup of user.js if exists
    if [ -f "${FIREFOXFOLDER}/user.js.bak" ]; then
        mv --backup=t ../user.js.bak ../user.js || { exit 1; }
    fi

    # If FXACEXTRAS extras enabled, remove additional files
    if [ -f "${FIREFOXFOLDER}/programs/config-prefs.js" ]; then
        rm "${FIREFOXFOLDER}/programs/config-prefs.js"
    fi

    if [ -f "${FIREFOXFOLDER}/programs/config.js" ]; then
        rm "${FIREFOXFOLDER}/programs/config.js"
    fi

    if [ -f "${FIREFOXFOLDER}/utils/boot.sys.mjs" ]; then
        rm "${FIREFOXFOLDER}/utils/boot.sys.mjs"
    fi

    echo "Removing mozilla.cfg, local-settings.js, config.js and config-pref.js from ${APPLICATIONFOLDER}"
    chmod +x "${PWD}/programs/uninstall-cfg.sh"
    sudo "${PWD}/programs/install-cfg.sh" ${APPLICATIONFOLDER} || { echo "Exiting..."; exit 1; }

    echo "RealFire! theme and associated configuration files have been removed."
else
    echo "Uninstallation aborted."
fi
