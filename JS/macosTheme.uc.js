// ==UserScript==
// @name           MacOS Window Control & Font Theme
// @version        1.1.1
// @author         Hakanbaban53
// @homepage       https://github.com/Hakanbaban53/RealFire
// @description    Move the window control to the left and recolor it and change the font.
// @downloadURL    https://cdn.jsdelivr.net/gh/Hakanbaban53/RealFire@main/JS/macosTheme.uc.js
// @updateURL      https://cdn.jsdelivr.net/gh/Hakanbaban53/RealFire@main/JS/macosTheme.uc.js
// @license        This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
// ==/UserScript==

(function () {
  // CSS rules to apply
  var css = `
/* Default font family for most elements, with fallbacks */
*:not([class*="FokDXb"]):not([class*="upload"]):not([class*="icon"]):not([class*="mui-amount"]):not([class*="chaoshi"]):not([class*="top-nav"]):not([href*="ju.taobao.com"]):not([class*="Icon"]):not(b):not(ins):not(i):not(s) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Ubuntu", "Cantarell", sans-serif !important;
}

/* Responsive adjustments for toolbar when width is less than 1000px */
@media (max-width: 1000px) {
    #toolbar-menubar .titlebar-buttonbox-container {
        display: flex !important;
    }
    #toolbar-menubar {
        display: flex;
        flex-direction: row-reverse;
    }
}

/* Toolbar adjustments for when width is 1000px or more */
@media (min-width: 1000px) {
    #navigator-toolbox:not([inFullscreen]) #TabsToolbar .titlebar-buttonbox-container {
        visibility: visible !important;
        display: block !important;
        position: absolute !important;
        top: 12px;
        left: -8px;
    }
}

/* Hide titlebar buttonbox container in toolbar menubar by default */
#toolbar-menubar .titlebar-buttonbox-container {
    display: none;
}

/* Reorder toolbar items */
#TabsToolbar .toolbar-items {
    order: 1 !important; 
}

#TabsToolbar .titlebar-buttonbox-container {
    order: 0 !important; 
}

/* Styling for titlebar buttons */
:root[sizemode="maximized"] .titlebar-buttonbox-container {
    padding-top: 0 !important;
}

:root:-moz-window-inactive:not([customizing]) .titlebar-buttonbox > toolbarbutton:not(:hover) {
    opacity: 0.65 !important;
    list-style-image: url(chrome://userchrome/content/material/inactive.svg) !important;
}

.titlebar-buttonbox {
    gap: 10px;
    margin-right: 12px !important;
    margin-left: 12px !important;
}

.titlebar-button > .toolbarbutton-icon,
.toolbarbutton-icon {
    opacity: 1 !important;
    appearance: none !important;
    background-image: none !important;
}

.titlebar-button > .toolbarbutton-icon {
    height: 15px !important;
    min-height: 25px !important;
    width: 15px !important;
    min-width: 25px !important;
    padding-left: 6px !important;
    padding-right: 6px !important;
}

/* Order and appearance of titlebar buttons */
.titlebar-close {
    order: 0 !important;
    padding: 0 !important;
    list-style-image: url(chrome://userchrome/content/material/close.svg) !important;
}

.titlebar-min {
    order: 1 !important;
    padding: 0 !important;
    list-style-image: url(chrome://userchrome/content/material/minimize.svg) !important;
}

.titlebar-max, .titlebar-restore {
    order: 2 !important;
    padding: 0 !important;
    list-style-image: url(chrome://userchrome/content/material/maximize.svg) !important;
}

/* Hover states for titlebar buttons */
.titlebar-min:hover {
    list-style-image: url(chrome://userchrome/content/material/minimize-hover.svg) !important;
}

.titlebar-max:hover {
    list-style-image: url(chrome://userchrome/content/material/maximize-hover.svg) !important;
}

.titlebar-restore:hover {
    list-style-image: url(chrome://userchrome/content/material/maximize-restore.svg) !important;
}

.titlebar-close:hover {
    list-style-image: url(chrome://userchrome/content/material/close-hover.svg) !important;
}
`;

  // Function to initialize the script
  function init() {
    var root = document.documentElement;
    var urlbarPosition = getComputedStyle(root).getPropertyValue('--uc-urlbar-position').trim();
    console.log('URL Bar Position:', urlbarPosition);

    // Function to apply styles based on the media query status
    function applyStyles(matches) {
      var navBar = document.getElementById('nav-bar');
      var titleBar = document.getElementById('titlebar');

      if (urlbarPosition === '1') {
        navBar.style.paddingLeft = matches ? '106px' : '0';
      } else if (urlbarPosition === '3') {
        titleBar.style.paddingLeft = matches ? '106px' : '0';
      }
    }

    // Initial application of styles
    applyStyles(window.matchMedia('(min-width: 1000px)').matches);

    // Listen for changes in the media query status
    window.matchMedia('(min-width: 1000px)').addListener(function (event) {
      console.log('Media Query Match:', event.matches);
      applyStyles(event.matches);
    });
  }

  // Check if the browser initialization is complete
  if (gBrowserInit.delayedStartupFinished) {
    init();
  } else {
    let delayedListener = (subject, topic) => {
      if (topic == "browser-delayed-startup-finished" && subject == window) {
        Services.obs.removeObserver(delayedListener, topic);
        init();
      }
    };
    Services.obs.addObserver(delayedListener, "browser-delayed-startup-finished");
  }

  // Create a style element and append the CSS rules
  var style = document.createElement("style");
  style.type = "text/css";
  style.textContent = css;
  document.head.appendChild(style);
})();