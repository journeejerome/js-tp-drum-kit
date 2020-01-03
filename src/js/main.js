//Exercice de Base
(function () {
    const DrumKit = {
        init(){
            document.documentElement.classList.toggle('js-enabled');
            this.key = document.querySelectorAll(".key");
            this.audio = document.querySelectorAll("audio");

            for(let element of this.key){
                element.addEventListener('click', this.play);
                element.addEventListener('transitionend', this.transitionEvent);
            }
            window.addEventListener('keypress', this.play);
        },
        play(event){
            const select  = event.type === 'click' ? event.currentTarget.dataset.key : event.key;

            this.key = document.querySelector(`.key[data-key="${select}"]`);
            this.audio = document.querySelector(`audio[data-key="${select}"]`);

            if(this.audio) {
                this.audio.currentTime = 0;
                this.audio.play();
                this.key.classList.add('playing');
                document.body.className = select;
            }
        },
        transitionEvent(event){
            document.body.className = "";
            event.currentTarget.classList.remove("playing");
        }
    };
    DrumKit.init();
})();
// Exercice avec Bonus
/*
(function () {
    const drumKit = {
        init(){
            document.body.classList.toggle('js-enabled');
            this.key = document.querySelectorAll(".key");
            this.audio = document.querySelectorAll("audio");
            this.audios = new Map();
            this.keys = new Map();

            for(let element of this.key){
                this.keys.set(element.dataset.key, element);
                element.addEventListener('click', ()=>{
                    this.play(element, this.audios, this.keys);
                });
                element.addEventListener('transitionend', this.transitionEvent);
            }
            for(let element of this.audio){
                this.audios.set(element.dataset.key, element);
            }
            window.addEventListener('keypress', ()=>{
                this.play(this, this.audios, this.keys);
            });
        },
        play(event, audios, keys){
            console.log(event.dataset.key);
            console.log(keys.get(event.dataset.key));

            if(event.type == 'click'){
                this.key = keys.get(event.dataset.key);
                this.audio = audios.get(event.dataset.key);
            }else{
                this.key = document.querySelector(`.key[data-key="${event.key}"]`);
                this.audio = document.querySelector(`audio[data-key="${event.key}"]`);
            }
            console.log(this.key);

            this.audio.play();
            this.key.currentTime = 0;
            this.key.classList.add('playing');
            document.body.classList.add(this.key.dataset.key);
        },
        transitionEvent(event){
            document.body.classList.remove(event.currentTarget.dataset.key);
            event.currentTarget.classList.remove("playing");
        }
    }
    drumKit.init();
})()*/
