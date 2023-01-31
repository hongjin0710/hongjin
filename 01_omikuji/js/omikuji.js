"use strict"

var n = 0;
var nBefore = 0;
window.addEventListener("DOMContentLoaded",
    function(){
        $("header").textillate({
            loop: false,
            minDisplayTime: 2000,
            initialDelay:2000,
            autoStart: true,
            in: {
                effect:"fadeInLeftBig",
                delayScale: 1.5,
                delay: 52,
                sync: false,
                shuffle: true
            }
        });
    $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000});
    }); 
    setTimeout(
        function(){
        let popMessage = "いらっしゃい！おみくじ引いてって！";
        window.alert(popMessage);
    }, 
    "5000"
    );
    }, false
);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function(){
        // let n = Math.floor(Math.random() * 3);
        
        // switch(n){
        //    case 0:
        //      btn1.textContent = "Very Happy!!";
        //      btn1.style.color = "#FF0000";
        //      btn1.style.fontSize = "40px";
        //      btn1.style.backgroundColor = "f111";
        //    break;
        //    case 1:
        //      btn1.textContent = "Happy!!";
        //      btn1.style.color = "#FF0001";
        //      btn1.style.fontSize = "30px";
        //    break;
        //    case 2:
        //      btn1.textContent = "UnHappy...";
        //      btn1.style.color = "#E3E4E5";
        //      btn1.style.fontSize = "20px";
        //  break;
        //  }
        let resultText = ["大吉!!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶"];
        let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
        let resultFontSize = ["50px", "40px", "35px", "30px", "25px", "15px"];
        
        while (n === nBefore) {
            n = Math.floor(Math.random() * resultText.length);
        }
        nBefore = n;
        
        btn1.textContent = resultText[n];
        btn1.style.color = resultColor[n];
        btn1.style.fontSize = resultFontSize[n];

        // snowfall stop
        $(document).snowfall("clear");

        // jQueryのsnowfall
        $(document).ready(function () {
            $(document).snowfall({
                maxSpeed: 5, 
                minSpeed: 1,
                maxSize: 30, 
                minSize: 3,
                image: 'img/sakura_hanabira.webp'
            });
        });

    }, false
);
