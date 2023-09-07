#!/usr/bin/env bash

THEMEDIRECTORY=$(cd `dirname "$0"` && cd .. && pwd);
FIREFOXFOLDER=~/snap/firefox/common/.mozilla/firefox/
PROFILENAME=""
THEME="DEFAULT"
CHROMEFOLDER="chrome";


# Get options.
while getopts 'f:p:t:' flag; do
	case "${flag}" in
	f) FIREFOXFOLDER="${OPTARG}" ;;
	p) PROFILENAME="${OPTARG}" ;;
	t) THEME="${OPTARG}" ;;
	*)
		echo "Gnome Theme Install Script:"
		echo "  -f <firefox_folder_path>. Set custom Firefox folder path."
		echo "  -p <profile_name>. Set custom profile name."
		echo "  -t <theme_name>. Set the colors used in the theme."
		echo "  -h to show this message."
		exit 0
		;;
	esac
done

function saveProfile(){
	local PROFILE_PATH="$1"

	cd "$FIREFOXFOLDER/$PROFILE_PATH" || { echo "FAIL, Firefox profile path was not found."; exit 1; }
	echo "Installing theme in $PWD" >$(tty)


	# Copy theme repo inside

echo "Installing RealFire! in ${PWD}"

# Create a chrome directory if it doesn't exist else take a backupold chrome folder
if [ -d "$CHROMEFOLDER" ]; then
    echo "Moving existing $CHROMEFOLDER to ${CHROMEFOLDER}_bak"
    mv --backup=t $CHROMEFOLDER "${CHROMEFOLDER}_bak" || { exit 1; }
fi

mkdir -p $CHROMEFOLDER
cd $CHROMEFOLDER

cp -a "${THEMEDIRECTORY}/." $PWD

}

PROFILES_FILE="${FIREFOXFOLDER}/profiles.ini"
if [ ! -f "${PROFILES_FILE}" ]; then
	>&2 echo "FAIL, please check Firefox installation, unable to find 'profile.ini' at ${FIREFOXFOLDER}."
	exit 1
fi
echo "'profiles.ini' found in ${FIREFOXFOLDER}"

PROFILES_PATHS=($(grep -E "^Path=" "${PROFILES_FILE}" | tr -d '\n' | sed -e 's/\s\+/SPACECHARACTER/g' | sed 's/Path=/::/g' ))
PROFILES_PATHS+=::

PROFILES_ARRAY=()
if [ "${PROFILENAME}" != "" ];
	then
		echo "Using ${PROFILENAME} profile"
		PROFILES_ARRAY+=${PROFILENAME}
else
	echo "Finding all available profiles";
	while [[ "$PROFILES_PATHS" ]]; do
		PROFILES_ARRAY+=( "${PROFILES_PATHS%%::*}" )
		PROFILES_PATHS=${PROFILES_PATHS#*::}
	done
fi



if [ ${#PROFILES_ARRAY[@]} -eq 0 ]; then
	echo "FAIL, no Firefox profile found in $PROFILES_FILE".;

else
	for i in "${PROFILES_ARRAY[@]}"
	do
		if [[ -n "$i" ]];
		then
			echo "Installing ${THEME} theme for $(sed 's/SPACECHARACTER/ /g' <<< $i) profile.";
			saveProfile "$(sed 's/SPACECHARACTER/ /g' <<< $i)"
		fi;
	done
fi