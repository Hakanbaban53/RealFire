// ==UserScript==
// @name           Window Control Macos Theme
// @version        1.0.0
// @author         Hakanbaban53
// @homepage       https://github.com/Hakanbaban53/RealFire
// @description    Move the window control to the left and recolor it.
// @downloadURL    https://cdn.jsdelivr.net/gh/Hakanbaban53/RealFire@main/JS/windowcontrolmacostheme.uc.js
// @updateURL      https://cdn.jsdelivr.net/gh/Hakanbaban53/RealFire@main/JS/windowcontrolmacostheme.uc.js
// @license        This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
// ==/UserScript==

(function () {
  // CSS rules to apply
  var css = `
  @media (min-width: 1000px) {
  #navigator-toolbox:not([inFullscreen]) #TabsToolbar .titlebar-buttonbox-container {
    visibility: visible !important;
    display: block !important;
    position: absolute !important;
      top: 20px;
      left: -8px;
  }
  }
  
  #TabsToolbar .toolbar-items {
    order: 1 !important; 
  }

  #TabsToolbar .titlebar-buttonbox-container {
    order: 0 !important; 
  }
  
  :root[sizemode="maximized"] .titlebar-buttonbox-container{
    padding-top: 0px !important;
  }
   
  :root:-moz-window-inactive:not([customizing])
      :is(.titlebar-buttonbox)
      > toolbarbutton:not(:hover) {
    opacity: 0.65 !important;
      list-style-image: url(chrome://userchrome/content/material/inactive.svg) !important;
  }
  
  :is(.titlebar-buttonbox) .toolbarbutton-icon {
    opacity: 1 !important;
      appearance: none !important;
  }
  
  .titlebar-button > .toolbarbutton-icon {
      width: 12px !important;
    min-width: 12px !important;
    min-height: 12px !important;
      height: 12px !important;
      stroke: none !important;
  }
  
  
  .titlebar-buttonbox {
      margin-right: 12px !important;
      margin-left: 12px !important;
  }
  
  .titlebar-close {
      appearance: none !important;
      padding: 0px !important;
      padding-left: 6px !important;
      padding-right: 5px !important;
      margin: 0px !important;
      background-color: transparent !important;
      order : 0 !important;
  }
  
  .titlebar-min {
      appearance: none !important;
      padding: 0px !important;
      padding-left: 3px !important;
      padding-right: 5px !important;
      margin: 0px !important;
      background-color: transparent !important;
      order :1 !important;
  }
  
  .titlebar-max,
  .titlebar-restore {
      appearance: none !important;
      padding: 0px !important;
      padding-left: 4px !important;
      padding-right: 5px !important;
      margin: 0px !important;
      background-color: transparent !important;
      order : 2 !important;
  }
  
  #TabsToolbar .titlebar-buttonbox .titlebar-button {
    list-style-image: url(chrome://userchrome/content/material/inactive.svg) !important;
  }
  
  
  #TabsToolbar .titlebar-buttonbox-container .titlebar-close {
    list-style-image: url(chrome://userchrome/content/material/close.svg) !important;
  }
  
  #TabsToolbar .titlebar-buttonbox-container .titlebar-close:hover {
      list-style-image: url(chrome://userchrome/content/material/close-hover.svg) !important;
  }
  
  #TabsToolbar .titlebar-buttonbox-container .titlebar-min {
    list-style-image: url(chrome://userchrome/content/material/minimize.svg) !important;	
  }
  
  #TabsToolbar .titlebar-buttonbox-container .titlebar-min:hover {
      list-style-image: url(chrome://userchrome/content/material/minimize-hover.svg) !important;
  }
  
  #TabsToolbar .titlebar-buttonbox-container .titlebar-max,
  #TabsToolbar .titlebar-buttonbox-container .titlebar-restore {
    list-style-image: url(chrome://userchrome/content/material/maximize.svg) !important;
  }
  
  #TabsToolbar .titlebar-buttonbox-container .titlebar-max:hover {
      list-style-image: url(chrome://userchrome/content/material/maximize-hover.svg) !important;
  }
  
  :root[sizemode="maximized"] #TabsToolbar .titlebar-buttonbox-container .titlebar-max:hover,
  #TabsToolbar .titlebar-buttonbox-container .titlebar-restore:hover {
      list-style-image: url(chrome://userchrome/content/material/maximize-restore.svg) !important;
  }
  }

  `;

  // Function to initialize the script
  function init() {
    var root = document.documentElement;
    var urlbarPosition = getComputedStyle(document.documentElement).getPropertyValue('--uc-urlbar-position').trim();
    console.log('URL Bar Position:', urlbarPosition);

    // Function to apply styles based on the media query status
    function applyStyles(matches) {
      var navBar = document.getElementById('nav-bar');
      var titleBar = document.getElementById('titlebar');

      if (urlbarPosition === '1') {
        navBar.style.paddingLeft = matches ? '72px' : '0';
      } else if (urlbarPosition === '3') {
        titleBar.style.paddingLeft = matches ? '72px' : '0';
      }
    }

    // Listen for changes in the media query status
    window.matchMedia('(min-width: 1000px)').addListener(function (event) {
      console.log('Media Query Match:', event.matches);
      applyStyles(event.matches);
    });

    // Initial application of styles
    applyStyles(window.matchMedia('(min-width: 1000px)').matches);
  }

  if (gBrowserInit.delayedStartupFinished) {
    init();
  } else {
    let delayedListener = (subject, topic) => {
      if (topic == "browser-delayed-startup-finished" && subject == window) {
        Services.obs.removeObserver(delayedListener, topic);
        init();
      }
    };
    Services.obs.addObserver(
      delayedListener,
      "browser-delayed-startup-finished"
    );
  }

  // Create a style element and append the CSS rules
  var style = document.createElement("style");
  style.type = "text/css";
  style.textContent = css;
  document.head.appendChild(style);
})();
