#!/usr/bin/env bash

THEMEDIRECTORY=$(cd `dirname "$0"` && cd .. && pwd);

case "$(uname -s)" in
    Darwin*)    FIREFOXFOLDER=~/Library/Application\ Support/Firefox/;;
    *)          FIREFOXFOLDER=~/.mozilla/firefox/;;
esac

APPLICATIONFOLDER='/usr/lib/firefox/'
PROFILENAME="";
FXACEXTRAS=true;
CHROMEFOLDER="chrome";


# Get installation options
while getopts 'b:f:p:eh' flag; do
    case "${flag}" in
        b) APPLICATIONFOLDER="${OPTARG}" ;;
        f) FIREFOXFOLDER="${OPTARG}" ;;
        p) PROFILENAME="${OPTARG}" ;;
        e) FXACEXTRAS=false ;;
        h)
            echo "RealFire! Install script usage: ./install.sh [ options ... ]"
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


# Copy theme repository inside chrome folder
echo
echo "Installing RealFire! in ${PWD}"

# Create a chrome directory if it doesn't exist else take a backupold chrome folder
if [ -d "$CHROMEFOLDER" ]; then
    echo "Moving existing $CHROMEFOLDER to ${CHROMEFOLDER}_bak"
    mv --backup=t $CHROMEFOLDER "${CHROMEFOLDER}_bak" || { exit 1; }
fi

mkdir -p $CHROMEFOLDER
cd $CHROMEFOLDER

cp -a "${THEMEDIRECTORY}/." $PWD


# Symlink user.js to that of RealFire!
echo
echo "Setting configuration user.js file..."

if [ -f ../user.js ]; then
    echo "Moving existing user.js to user.js.bak"
    mv --backup=t ../user.js ../user.js.bak || { exit 1; }
fi

ln -fs "`pwd`/programs/user.js" ../user.js


# If FXACEXTRAS extras enabled, install necessary files
if [ "$FXACEXTRAS" = true ] ; then
    echo

    echo "Enabling userChrome.js manager (fx-autoconfig)..."
    rm "./utils/boot.sys.mjs"
    curl -sL "https://raw.githubusercontent.com/MrOtherGuy/fx-autoconfig/master/profile/chrome/utils/boot.sys.mjs" > "./utils/boot.sys.mjs" || { echo "Failed to fetch boot.sys.mjs"; echo "Exiting..."; exit 1; }

    echo "Enabling config-prefs.js..."
    rm "./programs/config-prefs.js"
    curl -sL "https://raw.githubusercontent.com/MrOtherGuy/fx-autoconfig/master/program/defaults/pref/config-prefs.js" > "./programs/config-prefs.js" || { echo "Failed to fetch config-prefs.js"; echo "Exiting..."; exit 1; }
	echo "Enabling config.js..."
    rm "./programs/config.js"
	curl -sL "https://raw.githubusercontent.com/MrOtherGuy/fx-autoconfig/master/program/config.js" > "./programs/config.js" || { echo "Failed to fetch config.js"; echo "Exiting..."; exit 1; }


    echo
    echo "Copying mozilla.cfg, local-settings.js, config.js and config-pref.js to ${APPLICATIONFOLDER}"
    chmod +x "${PWD}/programs/install-cfg.sh"
    sudo "${PWD}/programs/install-cfg.sh" ${APPLICATIONFOLDER} || { echo "Exiting..."; exit 1; }
fi

echo
echo "Done!"
echo "Note: Restart twice to apply changes"