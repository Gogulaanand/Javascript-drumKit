function removeTransition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('playing');
}

function play(e){
    const audio = document.querySelector(`audio[key="${e.keyCode}"]`);
    const current = document.querySelector(`div[key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    current.classList.add('playing');
    console.log(current.lastElementChild.textContent); //if end up getting a good tune, your reference to get the notes
}

list_of_keys = document.querySelectorAll('.keys');
list_of_keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', play);

