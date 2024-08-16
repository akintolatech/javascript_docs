function updtSlide(){
    for(let slide of slides){
        slide.classList.remove("c-items--show");
        slide.classList.add("c-items--hide");
    }
    slides[slidePosition].classList.add("c-items--show");
}

function nxtSlide(){
    if(slidePosition === total - 1){
        slidePosition = 0;
    } else {
        slidePosition = slidePosition + 1;
    }
    updtSlide()
}

function prvSlide() {
    if(slidePosition === 0){
        slidePosition = total - 1;
    } else {
        slidePosition = slidePosition - 1;  
    }
    updtSlide()
}

let slidePosition = 0;
// let slides = document.getElementsByClassName("c-items");
let slides = document.querySelectorAll(".c-items");
let total = slides.length;
console.log(total);

let nxtBtn = document.querySelector(".nxt");
nxtBtn.addEventListener("click", nxtSlide);

let prvBtn = document.querySelector(".prv");
nxtBtn.addEventListener("click", prvSlide);

