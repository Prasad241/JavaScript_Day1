let randomNumber = Math.random();
let result = randomNumber < 0.5 ? 'heads' : 'tails';

let guess = 'heads';

console.log(guess === result ? 'You win!' : 'You lose!');