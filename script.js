const counterEl = document.querySelector('.counter');

const increaseButtonEl = document.querySelector('.counter__button--increase');

const decreaseButtonEl = document.querySelector('.counter__button--decrease');

const resetButtonEl = document.querySelector('.counter__reset-button');

const counterTitleEl = document.querySelector('.counter__title');

const counterValueEl = document.querySelector('.counter__value');

increaseButtonEl.addEventListener('click', incrementValue);
decreaseButtonEl.addEventListener('click', decrementValue);
resetButtonEl.addEventListener('click', resetButton);


function incrementValue() {
  //get current value of counter
  const currentValue = counterValueEl.textContent;
  //convert value to number type
  const currentValueAsNumber = +currentValue;
  //increment by 1
  let newValue = currentValueAsNumber + 1;
  if(newValue > 5) {
    newValue = 5

    counterEl.classList.add('counter__limit')
    counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5'
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  //set counter element with new value
  counterValueEl.textContent = newValue;
  increaseButtonEl.blur()
}

function decrementValue() {
  //get current value of counter
  const currentValue = counterValueEl.textContent;
  //convert value to number type
  const currentValueAsNumber = +currentValue;
  //decrement by 1
  let newValue = currentValueAsNumber - 1;
  //set counter element with new value
  if (newValue < 0) {
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
  decreaseButtonEl.blur()
  
}

function resetButton() {
  counterValueEl.textContent = 0;
  counterEl.classList.remove('counter__limit')
  counterTitleEl.innerHTML = 'FANCY COUNTER'
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  resetButtonEl.blur()
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp' || e.key === 'space') {
    incrementValue();
  } else if (e.key === 'ArrowDown') {
    decrementValue();
  } else if (e.key === 'Escape') {
    resetButton();
  }
});

// document.addEventListener('keydown', incrementValue)