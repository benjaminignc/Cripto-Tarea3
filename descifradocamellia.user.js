// ==UserScript==
// @name         Descifrador Camellia
// @namespace    http://github.com/benjaminignc
// @version      0.2
// @description  Cifrado Simetrico
// @author       Benjamín Contreras
// @match        https://benjaminignc.github.io/Cripto-Tarea3/index.html
// @grant        none
// @updateURL    https://raw.githubusercontent.com/benjaminignc/Cripto-Tarea3/index/descifradocamellia.user.js
// @downloadURL  https://raw.githubusercontent.com/benjaminignc/Cripto-Tarea3/index/descifradocamellia.user.js
// @require      https://raw.githubusercontent.com/F4stHosting/F4st_Crypt/master/index.js
// ==/UserScript==

(function() {
    'use strict';
    var f4cry = require("F4st_Crypt");
    var camellia=document.getElementsByClassName('msg')[0].id
    alert(camellia);
})();
