#!/usr/bin/env bash

FILENAME=RealFire-main.zip
FOLDERPATH=$PWD/RealFire-main

if [ -d "$FOLDERPATH" ]; then rm -Rf $FOLDERPATH; fi

curl -LJo $FILENAME https://github.com/Hakanbaban53/RealFire/archive/refs/heads/main.zip

unzip $FILENAME

rm $FILENAME

chmod +x "${FOLDERPATH}/programs/install.sh"

"${FOLDERPATH}/programs/install.sh" "$@"

# if [ -d "$FOLDERPATH" ]; then rm -Rf $FOLDERPATH; fi
