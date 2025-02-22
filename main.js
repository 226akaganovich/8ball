function getAnswer() {
  let userName = document.getElementById("nameInput").value;
  let userQuestion = document.getElementById("questionInput").value;

  if (userQuestion === '') {
    alert('Please ask a question!');
    return;
  }

  let greeting = userName ? `Hello, ${userName}!` : 'Hello!';
  console.log(`${userName ? userName + ' asked: ' : 'A user asked: '} ${userQuestion}`);

  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = '';
  if (randomNumber === 0) {
    eightBall = 'It is certain';
  } else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
  } else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
  } else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
  } else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
  } else if (randomNumber === 5) {
    eightBall = 'My sources say no';
  } else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
  } else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
  }

  let resultText = `${greeting} ${userName ? `${userName} asked:` : 'You asked:'} ${userQuestion}`;
  resultText += `<br><br>Magic Eight Ball says: <strong>${eightBall}</strong>`;
  document.getElementById('result').innerHTML = resultText;

  console.log(`Magic Eight Ball says: ${eightBall}`);
}
