let radioList = document.querySelector(".tabs").children;
let labelList = document.querySelector(".buttons").children;
let profileList = document.querySelector(".content").children;
let buttons = document.querySelector(".buttons");

for (let i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
        labelList[i].style.opacity = 1;
        labelList[i].style.width = "50px";
    }
    else {
        labelList[i].style.opacity = 0.5;
        labelList[i].style.width = "20px";
    }
}

buttons.addEventListener('click', function(e) {
    let c = e.target;
    let change = false;
    
    for (let j = 0; j < radioList.length; j++) {
        if (c == labelList[j]) {
            change = true;
        }
    }
    
    if (change) {
        for (let i = 0; i < radioList.length; i++) {
            if (c == labelList[i]) {
                labelList[i].style.opacity = 1;
                labelList[i].style.width = "50px";
                if (profileList[i].classList.contains("hide")) {
                    profileList[i].classList.remove("hide");
                }
            }
            else {
                labelList[i].style.opacity = 0.5;
                labelList[i].style.width = "20px";
                if (!(profileList[i].classList.contains("hide"))) {
                    profileList[i].classList.add("hide");
                }
            }
        }
    }
})