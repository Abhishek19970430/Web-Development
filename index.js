let b = document.querySelectorAll("button")
let k = document.querySelectorAll("button")
var songName = ""
let audio;


for(var i=0; i<b.length; i++){
    b[i].addEventListener("keypress", function F1(event){})
    k[i].addEventListener("click", function F1(event){})
}


function F1(){
    this.style.hovercolor = "white"

    let sn = (this.innerHTML == "w") ? ("crash.mp3") : (this.innerHTML == "a") ? ("kick-bass.mp3") : (this.innerHTML == "s") ? ("snare.mp3") : (this.innerHTML == "d") ? ("tom-1.mp3") : (this.innerHTML == "j") ? ("tom-2.mp3") : (this.innerHTML == "k") ? ("tom-3.mp3") : (this.innerHTML == "l") ? ("tom-4.mp3") : "";

    console.log(sn)

    audio = new Audio(`sounds/${sn}`);
    audio.play();
}

