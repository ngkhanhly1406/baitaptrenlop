var el;
function charCounot(e){
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersleft');
    counter = (180-(textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastkey');
    lastkey.textContent = ' last key in ascii code: ' + e.keyCode;

}
el = document.getElementById('message');
el.addEventListener('keyup', charCounot, false);