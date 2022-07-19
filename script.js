"use strict";

const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const startStopButton = document.getElementById("startStopButton");
const restartButton = document.getElementById("restartButton");

let firstClick = true;

function setCorrectTime(input) {
  
  if (input.value > 59) {
    
    input.value = 59;
    
  } else if (input.value < 0) {
    
    input.value = 0;
    
  };
  
};

function startTimer() {
  
  let interval = setInterval( ()=> {
    
    if (minutesInput.value > 0) {
      
      if (secondsInput.value >= 0) {
        
        if (secondsInput.value == 0) {
          
          secondsInput.value = 60;
          
          minutesInput.value--;
          
        };
        
        secondsInput.value--;
        
      };
      
    } else {
      
      if (secondsInput.value > 0) {
        
        secondsInput.value--;
        
      } else {
        
        clearTimeout(interval);
        
        startStopButton.innerText = "Start";

        alert("Acabou o tempo!");
        
      };
      
    };
    
  }, 1000);
};

function stopTimer() {
  
  for(let i=0; i<100; i++) {
    
    window.clearInterval(i);
    
  };
  
};

[minutesInput, secondsInput].forEach(input =>  {
  
  input.addEventListener("click", () => {
    
    input.select();
    
  })
  
  input.addEventListener("input", () => {
    
    if (minutesInput.value.length == 2) {
      secondsInput.focus();
    };
    
    if (secondsInput.value.length == 2) {
      secondsInput.blur();
    };
    
  });
  
});

startStopButton.addEventListener("click", () => {
  
  if (firstClick) {
    
    firstClick = false;
    
    startStopButton.innerText = "Stop";
    
    setCorrectTime(minutesInput);
    setCorrectTime(secondsInput);
    
    minutesInput.setAttribute("disabled", true);
    secondsInput.setAttribute("disabled", true);
    
    startTimer();
    
  } else if (!firstClick) {
    
    firstClick = true;
    
    
    minutesInput.removeAttribute("disabled");
    secondsInput.removeAttribute("disabled");
    
    startStopButton.innerText = "Start";
    
    stopTimer();
    
  };
  
});

restartButton.addEventListener("click", () => {
  
  stopTimer();
  
  minutesInput.removeAttribute("disabled");
  secondsInput.removeAttribute("disabled");
  
  startStopButton.innerText = "Start";
  
  minutesInput.value = 0;
  secondsInput.value = 0;
  
})