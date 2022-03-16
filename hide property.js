// ==UserScript==
// @name hide property info
// @description  hide property info in vault
// @author       Tik
// @match        https://www.torn.com/properties.php#/p=options&tab=vault*
// @grant        none
// ==/UserScript==



(function(){
    'use strict';

    var delay = 1500
    var cooldown = setInterval(hideIcon, delay);
    
    function hideIcon() {
        var info = $("div.property-info-cont");
        if(info.length > 0) {
            //alert("found");

            $(info).hide();
            $("div.vault-trans-wrap").hide();
            delay = 7000;

            //clearInterval(cooldown);
        } 
        else {
            delay = 1500;
            //alert("not found");
        }
    }

})();
