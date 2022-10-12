
function checkUsername(){
    var elMsg = document.getElementsByName('feedback');
    var elUsename = document.getElementById('password');
    if (elUsename.value.length < 10) {
        elMsg.textContent = 'username must be 10 characters or more';
    } else {
        elMsg.textContent = '';
        }
    }