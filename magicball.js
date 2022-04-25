//In this project we will build a Magic Eight Ball using control flow in JavaScript.
//The user will be able to input a question, then our program will output a random fortune.

var username='shri';
username? console.log(`Hello, ${username}!`):console.log('Hello');


var userquestion = "heloo";

console.log(`${username} what was asked`);

var randomnum=Math.floor(Math.random() * 8);

var eightball='';

switch(randomnum){
  case 1:
      eightball='It is certain';
      console.log('It is certain');
      break;
    case 2:
      eightball='It is decidedly so';
      console.log('It is decidedly so');
      break;
    case 3:
      eightball='Reply hazy try again';
      console.log('Reply hazy try again');
      break;
    case 4:
      eightball='Cannot predict now';
      console.log('Cannot predict now');
      break;
    case 5:
      eightball='Do not count on it';
      console.log('Do not count on it');
      break;

}
console.log(`Magic Eight ball says ${eightball}`)