// ==UserScript==
// @name         Descifrador Camellia
// @namespace    http://github.com/benjaminignc
// @version      0.9.2
// @description  Cifrado Simetrico
// @author       Benjamín Contreras
// @match        https://benjaminignc.github.io/Cripto-Tarea3/index.html
// @grant        none
// @updateURL    https://raw.githubusercontent.com/benjaminignc/Cripto-Tarea3/index/descifradocamellia.user.js
// @downloadURL  https://raw.githubusercontent.com/benjaminignc/Cripto-Tarea3/index/descifradocamellia.user.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.js



// ==/UserScript==

(function() {
    'use strict';
    var mensaje=document.getElementsByClassName('msg')[0].id;
    var iv=document.getElementsByClassName('iv')[0].id;
    var llave=document.getElementsByClassName('llave')[0].id;

    function decrypt(text, passwd, algorithm, ivt) {
        if (typeof algorithm === 'undefined') { algorithm = 'aes-256-cbc'; }
        let iv = Buffer.from(ivt, "hex");
        let key = crypto.createHash('sha256').update(passwd).digest('base64').substr(0, 32);
        let encryptedText = Buffer.from(text, 'hex');
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
       }
    
    var mensajeclaro=decrypt(mensaje,llave,'camellia-256-ebc',iv);
    alert(mensajeclaro);
       
})();
