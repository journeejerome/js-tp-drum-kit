console.log("Hello");

document.querySelector("html").className = "js-enabled";

window.addEventListener("keypress", son);

function son(event) {
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const key = document.querySelector(`.key[data-key="${event.key}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(event) {
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}



