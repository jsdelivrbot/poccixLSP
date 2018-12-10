// ==UserScript==
// @name        Allgemeines Script f�r Leitstellenspiel NEU
// @namespace   Leitstellenspiel
// @include     http*://www.leitstellenspiel.de/*
// @version     dev
// @author      Poccix
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement( "script" );
scriptElement.type = "text/javascript";
scriptElement.src = "https://cdn.jsdelivr.net/gh/poccix/poccixLSP@master/script_poccix.js";
document.body.appendChild(scriptElement);