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

window.addEventListener('keydown', johnPiano);

const kbds = document.querySelectorAll('kbd');
kbds.forEach(listenTranEnd);

function listenTranEnd(currentValue) {
    currentValue.addEventListener('transitionend', removeTransition);
}

function removeTransition(e) {
    if (e.propertyName == 'transform') {
        this.classList.remove('singing');
    }
}
