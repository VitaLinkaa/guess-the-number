let userNum = document.querySelector('input');
let button = document.querySelector('#btn');
let computerNum = Math.floor(Math.random() * 11);

console.log(computerNum);

button.onclick = guess;
function guess () {

    let num = userNum.value;
    num = parseInt(num);

    if (isNaN(num)) {
        alert ('Entered the number');
    } else {
        if (num === computerNum) {
            alert ('You win!');
            location.reload();
        } else {
            alert ('Try again!');
        }
    }
}
