
const keys = document.getElementsByClassName('key');


/*const a = document.getElementById('a');
a.addEventListener('mouseover', () => a.className = 'key-interact');
a.addEventListener('mouseleave', () => a.className = 'key');


for (element in keys) {
    let key = element
    key.addEventListener('mouseover', () => a.className = 'key-interact')
} */

for (i=0; i < keys.length; i++) {
    let key = keys[i];
    key.addEventListener('mouseover', () => key.className = 'key-interact');
    key.addEventListener('mouseleave', () => key.className = 'key');
}