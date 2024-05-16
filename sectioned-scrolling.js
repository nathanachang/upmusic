let home = document.querySelector("#home");
let about = document.querySelector("#about");
let artists = document.querySelector("#artists");
let team = document.querySelector("#team");
let discography = document.querySelector("#discography"); 
let shop = document.querySelector("#shop");

let iconList = document.querySelector('#icon-list');

let sections = [home, about, artists, team, discography, shop];

let sectionTitles = ["#home", "#about", "#artists", "#team", "#discography", "#shop"]

let sectionHeads = []

for (let i = 0; i < sectionTitles.length; i++) {
    sectionHeads.push($(sectionTitles[i]).offset().top);
}

let unselectedIconsList = ['assets/icons/Home.png', 'assets/icons/About.svg', 'assets/icons/Artist.svg', 'assets/icons/Team.svg', 'assets/icons/Discography.svg', 'assets/icons/Shop.svg'];
let selectedIconsList = ['assets/icons/Home-active.png', 'assets/icons/About-active.svg', 'assets/icons/Artist-active.svg', 'assets/icons/Team-active.svg', 'assets/icons/Discography-active.svg', 'assets/icons/Shop-active.svg'];


// creating an array of icons
let icons = [];
for(let i = 0; i < iconList.children.length; i++){
    if(iconList.children[i].id == 'icon-holder'){
        iconList.children[i].style.top = '0%';
        icons.push(iconList.children[i].children[0].children[0]);
    }
}

let index = 0;
let scrollFlag = true;
let windowHeight = window.innerHeight;

let bg = document.querySelector("#bg");

window.addEventListener('scroll', function() {    
    let val = window.scrollY;
    bg.style.backgroundSize = (windowHeight * 0.25) - (val*0.5) + 'px';
    for (let i = 0; i < sectionHeads.length; i++) {
        if (i != sectionHeads.length-1) {
            if (val >= sectionHeads[i]-windowHeight/3 && val <= sectionHeads[i+1]) {
                index = i;
            }
        }
        else {
            if (val >= sectionHeads[i]) {                
                index = i;
            }
        }
    }
    
    for (let i = 0; i < icons.length; i++) {
        if (index == i) {
            sections[i].classList.add('active-section');
            icons[i].src = selectedIconsList[i];
        }
        else {
            sections[i].classList.remove('active-section');
            icons[i].src = unselectedIconsList[i];
        }
    }
}); 

