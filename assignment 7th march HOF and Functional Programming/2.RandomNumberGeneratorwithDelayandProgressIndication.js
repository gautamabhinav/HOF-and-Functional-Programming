let delay = 3; // the delay in seconds
let remainingTime = delay;

// loop to display progress indication every second
let intervalId = setInterval(function() {
  console.log(`Generating random number in ${remainingTime} seconds...`);
  remainingTime--;
  if (remainingTime < 0) {
    clearInterval(intervalId);
    let randomNumber = Math.floor(Math.random() * 100); // generate a random number between 0 and 99
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000); // execute the function every second
