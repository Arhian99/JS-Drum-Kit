
const keys = document.getElementsByClassName('key');

function checkKeyPressDown(event) {
    if (event.keyCode == 65) {
        let id = document.getElementById('a');
        id.className = 'key-interact-down';
        let audio = document.getElementById('clap');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 83) {
        let id = document.getElementById('s');
        id.className = 'key-interact-down';
        let audio = document.getElementById('hihat');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 68) {
        let id = document.getElementById('d');
        id.className = 'key-interact-down';
        let audio = document.getElementById('kick');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 70) {
        let id = document.getElementById('f');
        id.className = 'key-interact-down';
        let audio = document.getElementById('open-hat');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 71) {
        let id = document.getElementById('g');
        id.className = 'key-interact-down';
        let audio = document.getElementById('dembow-snare');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 72) {
        let id = document.getElementById('h');
        id.className = 'key-interact-down';
        let audio = document.getElementById('scratch');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 74) {
        let id = document.getElementById('j');
        id.className = 'key-interact-down';
        let audio = document.getElementById('palito');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 75) {
        let id = document.getElementById('k');
        id.className = 'key-interact-down';
        let audio = document.getElementById('tom');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    }

    else if (event.keyCode == 76) {
        let id = document.getElementById('l');
        id.className = 'key-interact-down';
        let audio = document.getElementById('tink');
        audio.play();
        event.target.removeEventListener('click', checkKeyPressDown)
    };
};

function checkKeyPressUp(event) {
    if (event.keyCode == 65) {
        let id = document.getElementById('a');
        id.className = 'key';
    }

    else if (event.keyCode == 83) {
        let id = document.getElementById('s');
        id.className = 'key';
    }

    else if (event.keyCode == 68) {
        let id = document.getElementById('d');
        id.className = 'key';
    }

    else if (event.keyCode == 70) {
        let id = document.getElementById('f');
        id.className = 'key';
    }

    else if (event.keyCode == 71) {
        let id = document.getElementById('g');
        id.className = 'key';
    }

    else if (event.keyCode == 72) {
        let id = document.getElementById('h');
        id.className = 'key';
    }

    else if (event.keyCode == 74) {
        let id = document.getElementById('j');
        id.className = 'key';
    }

    else if (event.keyCode == 75) {
        let id = document.getElementById('k');
        id.className = 'key';
    }

    else if (event.keyCode == 76) {
        let id = document.getElementById('l');
        id.className = 'key';
    }
};


function checkClick(event) {
    if (event.target.id == 'a') {
        let audio = document.getElementById('clap');
        audio.play();
    }

    else if (event.target.id == 's') {
        let audio = document.getElementById('hihat');
        audio.play();
    }

    else if (event.target.id == 'd') {
        let audio = document.getElementById('kick');
        audio.play();
    }

    else if (event.target.id == 'f') {
        let audio = document.getElementById('open-hat');
        audio.play();
    }

    else if (event.target.id == 'g') {
        let audio = document.getElementById('dembow-snare');
        audio.play();
    }

    else if (event.target.id == 'h') {
        let audio = document.getElementById('scratch');
        audio.play();
    }

    else if (event.target.id == 'j') {
        let audio = document.getElementById('palito');
        audio.play();
    }

    else if (event.target.id == 'k') {
        let audio = document.getElementById('tom');
        audio.play();
    }

    else if (event.target.id == 'l') {
        let audio = document.getElementById('tink');
        audio.play();
    }
};


for (let key of keys) {
    key.addEventListener('mouseover', () => key.className = 'key-interact-up');
    key.addEventListener('mouseleave', () => key.className = 'key'); 
    key.addEventListener('mousedown', () => key.className = 'key-interact-down');
    key.addEventListener('mouseup', () => key.className = 'key-interact-up');
    key.addEventListener('mousedown', checkClick);
};

window.addEventListener('keydown', checkKeyPressDown); 
//window.removeEventListener('keydown', checkKeyPressDown);
window.addEventListener('keyup', checkKeyPressUp);