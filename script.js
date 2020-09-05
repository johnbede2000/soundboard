window.addEventListener('keydown', johnPiano);

function johnPiano(e) {
    const sing = document.querySelector(`audio[data-eventKey='${e.keyCode}']`);
    const key = document.querySelector(`kbd[data-eventKey='${e.keyCode}']`);
    if (sing==null) {
        return;
    }
    sing.currentTime = 0;
    sing.play();
    key.classList.add('singing');
}

const kbds = document.querySelectorAll('kbd');
kbds.forEach(removeTransition);

function removeTransition {
    
}
