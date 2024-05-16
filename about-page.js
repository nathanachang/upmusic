let humbleText = document.getElementById("humble");
let smartText = document.getElementById("smart");
let hungryText = document.getElementById("hungry");

let hoverTexts = [humbleText, smartText, hungryText];

hoverTexts.forEach(function(text) {
    text.addEventListener("mouseover", function(event) {
        this.style.top = '25vh';
        this.style.padding = '5vw';
        this.nextElementSibling.classList.remove("hidden");
        this.parentElement.classList.add("panel-bg");
    });
    
    text.addEventListener("mouseout", function(event) {
        this.style.top = '40vh';
        this.style.padding = '0';
        this.nextElementSibling.classList.add("hidden");
        this.parentElement.classList.remove("panel-bg");
    });
});