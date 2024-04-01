#!/usr/bin/env bash

# Confirm uninstallation

    # Remove associated configuration files
    rm -f "${1}/mozilla.cfg"
    rm -f "${1}/config.js"
    rm -f "${1}/defaults/pref/config-prefs.js"
    rm -f "${1}/defaults/pref/local-settings.js"


