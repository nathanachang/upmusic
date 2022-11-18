let logoList = document.querySelector('#logo-list').children[0];
let sourceList = ['index.html', 'index.html', 'jhin.html', 'index.html', 'discography.html', 'index.html'];

// creating an array of list items in the main logo's drop down menu
let logoListButtons = [];
for(let i = 0; i < logoList.children.length; i++){
    if(logoList.children[i].tagName == 'LI'){
        logoListButtons.push(logoList.children[i]);
    }
}

// making the logo list clickable
function makeLogoListClickable(val, ind){
    val.addEventListener('click', function() {
        location.href = sourceList[ind];
    });
}

logoListButtons.forEach(makeLogoListClickable);