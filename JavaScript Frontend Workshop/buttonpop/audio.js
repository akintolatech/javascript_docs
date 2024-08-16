function play(){
    let audio = document.querySelector('#audio');
    audio.play()
}

let button = document.querySelecto('.btn');
button.addEventListener("click", play);