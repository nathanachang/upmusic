var jhin1 = document.getElementById("jhin-1");
var jhin2 = document.getElementById("jhin-2");
var jhin3 = document.getElementById("jhin-3");
var jhin4 = document.getElementById("jhin-4");

var images = ["assets/img2.png", "assets/img3.png", "assets/img4.png", "assets/img5.png"];

var index = 0;

function changeImages2() {
    jhin1.style.opacity = 0;
    setTimeout(function() {
        jhin1.src = images[index % 4];
        jhin1.style.opacity = 1;
    }, 150);
    
    setTimeout(function() {
        jhin2.style.opacity = 0;
    }, 300);    
    setTimeout(function() {
        jhin2.src = images[(index+1) % 4];
        jhin2.style.opacity = 1;
    }, 450);
    
    setTimeout(function() {
        jhin3.style.opacity = 0;  
    }, 600)    
    setTimeout(function() {
        jhin3.src = images[(index+2) % 4];
        jhin3.style.opacity = 1;
    }, 750);
    
    setTimeout(function() {
        jhin4.style.opacity = 0;
    }, 900)    
    setTimeout(function() {
        jhin4.src = images[(index+3) % 4];
        jhin4.style.opacity = 1;
    }, 1050);
    
    index += 1;
}

setInterval(changeImages2, 5000);

