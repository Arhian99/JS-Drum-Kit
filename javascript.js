
const keys = document.getElementsByClassName('key');

for (i=0; i < keys.length; i++) {
    let key = keys[i];
    key.addEventListener('mouseover', () => key.className = 'key-interact');
    key.addEventListener('mouseleave', () => key.className = 'key');
};



//window.addEventListener('keyup', reset);


function checkKeyPressDown(event) {
    if (event.keyCode == 65) {
        let id = document.getElementById('a');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 83) {
        let id = document.getElementById('s');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 68) {
        let id = document.getElementById('d');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 70) {
        let id = document.getElementById('f');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 71) {
        let id = document.getElementById('g');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 72) {
        let id = document.getElementById('h');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 74) {
        let id = document.getElementById('j');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 75) {
        let id = document.getElementById('k');
        id.className = 'key-interact';
    }

    else if (event.keyCode == 76) {
        let id = document.getElementById('l');
        id.className = 'key-interact';
    }
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



window.addEventListener('keydown', checkKeyPressDown);
window.addEventListener('keyup', checkKeyPressUp);

