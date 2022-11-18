about = document.querySelector("#about");

const backgroundImage = document.createElement("img");
backgroundImage.src = 'assets/logo.svg';
backgroundImage.classList = 'about-background';
about.appendChild(backgroundImage);

const defaultText = '<span style="color:white"><b>UP Music is a place where people come to find their true potential.</b></span>';
const humbleText = "We focus on building upon those values as the <span style='color:white'><b>foundation</b></span>. No matter how talented you are, we believe if you don't have the <span style='color:white'><b>right values</b></span> and <span style='color:white'><b>character</b></span>, you will not be able to reach your full potential.";
const smartText = "They first come with a <span style='color:white'><b>limited mindset</b></span>, doubting themselves and their <span style='color:white'><b>skills</b></span>. We believe that with the right purpose and core values, your <span style='color:white'><b>potential is unlimited!</b></span>";
const hungryText = "We strive to be the <span style='color:white'><b>best version</b></span> of ourselves. Constantly <span style='color:white'><b>learning</b></span> and <span style='color:white'><b>improving</b></span> in search of achieving more than we thought possible.";

const hover1 = document.createElement("button");
hover1.innerHTML = 'HUMBLE';
hover1.classList.add('about-hover');
hover1.style.left = '22%';
about.appendChild(hover1);

const hover2 = document.createElement("button");
hover2.innerHTML = 'SMART';
hover2.classList.add('about-hover');
hover2.style.left = '32%';
about.appendChild(hover2);

const hover3 = document.createElement("button");
hover3.innerHTML = 'HUNGRY';
hover3.classList.add('about-hover');
hover3.style.left = '42%';
about.appendChild(hover3);

const aboutHead = document.createElement("h1");
aboutHead.innerHTML = 'UP MUSIC';
aboutHead.classList.add('about-heading');
about.appendChild(aboutHead);

const aboutBody = document.createElement("p");
aboutBody.innerHTML = defaultText;
aboutBody.classList.add('about-body');
about.appendChild(aboutBody);

hover1.addEventListener('mouseover', function(event){
    aboutBody.innerHTML = humbleText;
});
hover2.addEventListener('mouseover', function(event){
    aboutBody.innerHTML = smartText;
});
hover3.addEventListener('mouseover', function(event){
    aboutBody.innerHTML = hungryText;
});

hover1.addEventListener('mouseout', function(event){
    aboutBody.innerHTML = defaultText;
});
hover2.addEventListener('mouseout', function(event){
    aboutBody.innerHTML = defaultText;
});
hover3.addEventListener('mouseout', function(event){
    aboutBody.innerHTML = defaultText;
});