#!/usr/bin/env bash

VERSION=$(curl -s "https://github.com/Hakanbaban53/RealFire/releases/latest/download" 2>&1 | sed "s/^.*download\/\([^\"]*\).*/\1/")
FILENAME=RealFire-$VERSION.zip
FOLDERPATH=$PWD/RealFire-master

if [ -d "$FOLDERPATH" ]; then rm -Rf $FOLDERPATH; fi

curl -LJo $FILENAME https://github.com/Hakanbaban53/RealFire/archive/refs/heads/main.zip

unzip $FILENAME

rm $FILENAME

chmod +x "${FOLDERPATH}/programs/install.sh"

"${FOLDERPATH}/programs/install.sh" -e

if [ -d "$FOLDERPATH" ]; then rm -Rf $FOLDERPATH; fi
