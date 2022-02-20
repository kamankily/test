// ==UserScript==
// @description  
// @name        Hide Slots Buttons
// @author       Tik
// @match        https://www.torn.com/loader.php?sid=slots
// @grant        none
// ==/UserScript==



(function(){
    'use strict';

    var cooldown = setInterval(hideBtn, 2500);
    
    function hideBtn() {
        var btn10 = $("li.btn-10");
        if(btn10.length > 0) {
            //alert("found");

            $(btn10).hide();
            $("li.btn-100").hide();
            $("li.btn-10k").hide();
            $("li.btn-100k").hide();
            $("li.btn-1m").hide();
            $("li.btn-10m").hide();

            clearInterval(cooldown);
        } 
        else {
            //alert("not found");
        }
    }

})();
