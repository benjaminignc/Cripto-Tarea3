// ==UserScript==
// @name         Descifrado Camellia
// @namespace    http://github.com/benjaminignc
// @version      0.1
// @description  Cifrado Simetrico
// @author       Benjamín Contreras
// @match        https://benjaminignc.github.io/Cripto-Tarea3/index.html
// @grant        none
// @updateURL    https://raw.githubusercontent.com/benjaminignc/Cripto-Tarea3/index/descifradocamellia.user.js
// @downloadURL  https://raw.githubusercontent.com/benjaminignc/Cripto-Tarea3/index/descifradocamellia.user.js
// ==/UserScript==

(function() {
    'use strict';
    var camellia=document.getElementsByClassName('msg')[0].id
    alert(camellia);
})();
