home = document.querySelector("#home");
about = document.querySelector("#about");
artists = document.querySelector("#artists");
team = document.querySelector("#team");
discography = document.querySelector("#discography");
shop = document.querySelector("#shop");
iconList = document.querySelector('#icon-list');

sections = [home, about, artists, team, discography, shop];
let logoList = document.querySelector('#logo-list').children[0];
let iconTexts = ['HOME', 'ABOUT', 'JHIN', 'TEAM', 'DISCOGRAPHY', 'SHOP'];

// creating an array of icon butttons (the things that are actually clickable)
let iconButons = [];
for(let i = 0; i < logoList.children.length; i++){
    if(iconList.children[i].id == 'icon-holder'){
        iconList.children[i].style.top = '0%';
        iconButons.push(iconList.children[i].children[0]);
    }
}

// creating an array of list items in the main logo's drop down menu
let logoListButtons = [];
for(let i = 0; i < logoList.children.length; i++){
    if(logoList.children[i].tagName == 'LI'){
        logoListButtons.push(logoList.children[i]);
    }
}

// making the icons clickable
function makeIconsClickable(val, ind){
    val.addEventListener('click', function() {
        index = ind + 1;
        window.scrollTo({ top: ind * sections[ind].clientHeight });
        old = ind * sections[ind].clientHeight;
        scrollFlag = true;
    });
}

// making the logo list clickable
function makeLogoListClickable(val, ind){
    val.addEventListener('click', function() {
        index = ind + 1;
        window.scrollTo({ top: ind * sections[ind].clientHeight });
        old = ind * sections[ind].clientHeight;
        scrollFlag = true;
        document.querySelector('.logo').classList.toggle('active');
    });
}
iconButons.forEach(makeIconsClickable);
logoListButtons.forEach(makeLogoListClickable);

for(let i = 0; i < icons.length; i++){
    // for when you hover over an icon
    icons[i].addEventListener("mouseover", function(event){
        icons[i].classList.add("enlarge");
        const newHolder = document.createElement("div");
        newHolder.classList.add('icon-text-holder');
        const newDiv = document.createElement("p");
        newDiv.classList.add('icon-text');
        const newText = document.createTextNode(iconTexts[i]);
        newHolder.appendChild(newDiv);
        newDiv.appendChild(newText);
        iconList.children[i].insertBefore(newHolder, iconList.children[i].children[0].nextSibling);
        for(let j = 0; j < icons.length; j++){
            if(j < i){
                icons[j].style.top = '-5%';
                icons[j].classList.add("shrink");
            }
            if(j > i){
                icons[j].style.top = '5%';
                icons[j].classList.add("shrink");
            }
        }
    });
    // for when your mouse gets out of hovering over an icon
    icons[i].addEventListener("mouseout", function(event){
        icons[i].classList.remove("enlarge");
        iconList.children[i].removeChild(iconList.children[i].children[1]);
        for(let j = 0; j < icons.length; j++){
            if(j < i){
                icons[j].style.top = '0%';
                icons[j].classList.remove("shrink");
            }
            if(j > i){
                icons[j].style.top = '0%';
                icons[j].classList.remove("shrink");
            }
        }
    });
};