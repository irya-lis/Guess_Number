let secretNum = Math.ceil(Math.random() * 10);
let tries = 5;

function guessNum(num) {
    if (tries) {

        if (num === secretNum) {
            tries = 0;
            console.log(`Ваше число: ${num}  - Число угадано! Вы победили!!!`);
            return console.log('Игра окончена.');
        }

        if (num !== secretNum) {
            tries--;
            console.log(`Ваше число: ${num} - Попробуйте еще раз!`);

            if (num > secretNum) {
                console.log('Загаланное число меньше');
            } else if (num < secretNum) {
                console.log('Загаданное число больше');
            }
        }

        if (tries === 0) {
            return console.log('Вы исчерпали попытки!!! Игра окончена.');
        }
    }


}
