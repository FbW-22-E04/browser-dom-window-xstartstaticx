let randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);

let userNumber = window.prompt(
  "Guess a number from 1 to 10",
  "Enter a number between 1 and 10"
);

let counter = 0;

for (let i = 0; i < 4; i++) {
  if (randomNumber == userNumber) {
    counter++;
    alert(`Success, the number was ${userNumber}! Attempts: ${counter}`);
    break;
  } else {
    if (counter == 2) {
      alert(
        `Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`
      );
      break;
    }
    counter++;
    userNumber = prompt("Wrong!!! Try Again!");
  }
}
