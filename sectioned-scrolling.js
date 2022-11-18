let home = document.querySelector("#home");
let about = document.querySelector("#about");
let artists = document.querySelector("#artists");
let team = document.querySelector("#team");
let discography = document.querySelector("#discography"); 
let shop = document.querySelector("#shop");

let iconList = document.querySelector('#icon-list');

let sections = [home, about, artists, team, discography, shop];

let unselectedIconsList = ['assets/icons/About.svg', 'assets/icons/About.svg', 'assets/icons/Artist.svg', 'assets/icons/Team.svg', 'assets/icons/Discography.svg', 'assets/icons/Shop.svg'];
let selectedIconsList = ['assets/icons/About-active.svg', 'assets/icons/About-active.svg', 'assets/icons/Artist-active.svg', 'assets/icons/Team-active.svg', 'assets/icons/Discography-active.svg', 'assets/icons/Shop-active.svg'];


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

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}

let old = window.scrollY;
/*
sections[i].classList.add('active-section');
icons[i].src = selectedIconsList[i];
for (let j = 0; j < icons.length; j++) {
    if (j != i) {
        sections[j].classList.remove('active-section');
        icons[j].src = unselectedIconsList[j];
    }
}
*/

window.addEventListener('scroll', function() {
    if (scrollFlag) {                    
        scrollFlag = false;
        
        let value = window.scrollY;
        if (value > old) {
            if (index < sections.length-1) { index += 1; } 
        }
        else {
            if (index > 0) { index -= 1; } 
        }
        
        window.scrollTo({ top: index * sections[index].clientHeight });
        
        old = index * sections[index].clientHeight
        
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
        
        //setTimeout(() => { disableScroll(); console.log("scroll disabled") }, 750); 
        disableScroll();
        setTimeout(() => { scrollFlag = true; enableScroll(); console.log("scroll enabled"); }, 1500);
    }
}); 
