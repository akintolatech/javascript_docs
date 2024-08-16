function switchfunc(){
    let lever = document.querySelector(".switch");
    let content = document.querySelector(".content");
    if(lever.className === "switch" || content.className === "content"){
        lever.className += " on";
        content.className += " open";
    }
    else {
        lever.className = "switch";
        content.className = "content";
    }
}

let lever = document.querySelector(".switch");
lever.addEventListener("click", switchfunc);
