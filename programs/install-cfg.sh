#!/usr/bin/env bash

cp ./programs/mozilla.cfg "${1}/"
cp ./programs/config.js "${1}/"

cp ./programs/config-prefs.js "${1}/defaults/pref/"
cp ./programs/local-settings.js "${1}/defaults/pref/"
