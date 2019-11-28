// document.querySelector("html").className = "js-enabled";
// window.addEventListener("keypress", son);
//
// function son(event) {
//     const audio = document.querySelector(`audio[data-key="${event.key}"]`);
//     const key = document.querySelector(`.key[data-key="${event.key}"]`);
//
//     if(!audio) return;
//
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('playing');
//     document.body.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
//
// }
//
// const keys = document.querySelectorAll('.key');
//
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//
// function removeTransition(event) {
//     if(event.propertyName !== 'transform') return;
//     this.classList.remove('playing');
//     document.body.style.backgroundColor = 'white';
//
// }


(function () {
    const drumKit = {
        init(){
            document.querySelector("html").className = "js-enabled";
            window.addEventListener("keypress", this.sonClavier);
            this.keys = document.querySelectorAll('.key');
            for(this.element of this.keys){
                this.element.addEventListener("click", this.sonSouris);
            }
            this.keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));

        },
        sonClavier(event){
            console.log(event);
            this.audio = document.querySelector(`audio[data-key="${event.key}"]`);
            this.key = document.querySelector(`.key[data-key="${event.key}"]`);

            if(!this.audio) return;

            this.audio.currentTime = 0;
            this.audio.play();
            this.key.classList.add('playing');
            document.body.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;

        },
        sonSouris(event){
            this.audio = document.querySelector(`audio[data-key="${event.currentTarget.dataset.key}"]`);
            this.key = document.querySelector(`.key[data-key="${event.currentTarget.dataset.key}"]`);

            if(!this.audio) return;

            this.audio.currentTime = 0;
            this.audio.play();
            this.key.classList.add('playing');
            document.body.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
        },
        removeTransition(event){
            if(event.propertyName !== 'transform') return;
            this.classList.remove('playing');
            document.body.style.backgroundColor = 'white';
        }
    };
    drumKit.init();
})();










