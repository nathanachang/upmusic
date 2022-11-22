discography = document.querySelector("#discography");

let albumCovers = ['assets/albums/cover1.jpg', 'assets/albums/cover2.jpg', 'assets/albums/cover3.jpg', 'assets/albums/cover4.jpg', 'assets/albums/cover5.png', 
                    'assets/albums/cover6.jpg', 'assets/albums/cover7.jpg', 'assets/albums/cover8.jpg', 'assets/albums/cover9.jpg', 'assets/albums/cover10.jpg',
                    'assets/albums/cover11.jpg', 'assets/albums/cover12.jpg', 'assets/albums/cover13.jpg', 'assets/albums/cover14.jpg', 'assets/albums/cover15.jpg', 
                    'assets/albums/cover16.jpg', 'assets/albums/cover17.jpg', 'assets/albums/cover18.jpg', 'assets/albums/cover19.jpg', 'assets/albums/cover20.jpg'];

let layer1 = [];
let layer2 = [];
let layer3 = [];
let layer4 = [];
let layer5 = [];

// add photos to discography section
for(let i = 0; i < 9; i++){
    const albumCover = document.createElement("img");
    albumCover.src = albumCovers[(i) % albumCovers.length];
    albumCover.classList.add('album-cover');
    albumCover.style.marginTop = '-52%';
    albumCover.style.marginLeft = ((10 - i) * 15 - 40) + '%';
    discography.appendChild(albumCover);
    layer1.push(albumCover);
}
for(let i = 0; i < 9; i++){
    const albumCover = document.createElement("img");
    albumCover.src = albumCovers[(i + (albumCovers.length) / 2) % albumCovers.length];
    albumCover.classList.add('album-cover');
    albumCover.style.marginTop = '-25%';
    albumCover.style.marginLeft = (i * 15 - 15) + '%';
    discography.appendChild(albumCover);
    layer2.push(albumCover);
}
for(let i = 0; i < 9; i++){
    const albumCover = document.createElement("img");
    albumCover.src = albumCovers[(i + (albumCovers.length) / 2) % albumCovers.length];
    albumCover.classList.add('album-cover');
    albumCover.style.marginTop = '27%';
    albumCover.style.marginLeft = ((10 - i) * 15 - 40) + '%';
    discography.appendChild(albumCover);
    layer3.push(albumCover);
}
for(let i = 0; i < 9; i++){
    const albumCover = document.createElement("img");
    albumCover.src = albumCovers[(i) % albumCovers.length];
    albumCover.classList.add('album-cover');
    albumCover.style.marginTop = '56%';
    albumCover.style.marginLeft = (i * 15 - 15) + '%';
    discography.appendChild(albumCover);
    layer4.push(albumCover);
}
for(let i = 0; i < 5; i++){
    const albumCover = document.createElement("img");
    albumCover.src = albumCovers[(i + 7) % albumCovers.length];
    albumCover.classList.add('album-cover-equator');
    albumCover.style.marginTop = '1.5%';
    albumCover.style.marginLeft = (i * 8 - 2) + '%';
    discography.appendChild(albumCover);
    layer5.push(albumCover);
}
for(let i = 0; i < 5; i++){
    const albumCover = document.createElement("img");
    albumCover.src = albumCovers[(i) % albumCovers.length];
    albumCover.classList.add('album-cover-equator');
    albumCover.style.marginTop = '1.5%';
    albumCover.style.marginLeft = (i * 8 + 63) + '%';
    discography.appendChild(albumCover);
    layer5.push(albumCover);
}

let zoom = (( window.outerWidth - 10 ) / window.innerWidth) * 100;

for(let i = 0; i < 9; i++){
    layer1[i].style.transform = "scale(" + (100 / zoom) + ")";
    layer2[i].style.transform = "scale(" + (100 / zoom) + ")";
    layer3[i].style.transform = "scale(" + (100 / zoom) + ")";
    layer4[i].style.transform = "scale(" + (100 / zoom) + ")";
}
for(let i = 0; i < 10; i++){
    layer5[i].style.transform = "scale(" + (100 / zoom) + ")";
}

window.onresize = resize;
function resize() {
    zoom = (( window.outerWidth - 10 ) / window.innerWidth) * 100;
    for(let i = 0; i < 9; i++){
        layer1[i].style.transform = "scale(" + (100 / zoom) + ")";
        layer2[i].style.transform = "scale(" + (100 / zoom) + ")";
        layer3[i].style.transform = "scale(" + (100 / zoom) + ")";
        layer4[i].style.transform = "scale(" + (100 / zoom) + ")";
    }
    for(let i = 0; i < 10; i++){
        layer5[i].style.transform = "scale(" + (100 / zoom) + ")";
    }
}

const isInViewPort = function (element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom >= 0 && rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// let discoMove;
discography.children[0].addEventListener("mouseover", function(event){
    for(let i = 0; i < layer1.length; i++){
        layer1[i].classList.add('disco-hover-right');
    }
    for(let i = 0; i < layer2.length; i++){
        layer2[i].classList.add('disco-hover-left');
    }
    for(let i = 0; i < layer3.length; i++){
        layer3[i].classList.add('disco-hover-right');
    }
    for(let i = 0; i < layer4.length; i++){
        layer4[i].classList.add('disco-hover-left');
    }
});
discography.children[0].addEventListener("mouseout", function(event){
    for(let i = 0; i < layer1.length; i++){
        layer1[i].classList.remove('disco-hover-right');
    }
    for(let i = 0; i < layer2.length; i++){
        layer2[i].classList.remove('disco-hover-left');
    }
    for(let i = 0; i < layer3.length; i++){
        layer3[i].classList.remove('disco-hover-right');
    }
    for(let i = 0; i < layer4.length; i++){
        layer4[i].classList.remove('disco-hover-left');
    }
    // clearInterval(discoMove);
    // vw / vh
});