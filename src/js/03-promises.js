import Notiflix from 'notiflix';

const formEl = document.querySelector('form');
const inputDelayEl = formEl.delay;
const inputStepEl = formEl.step;
const inputAmountEl = formEl.amount;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const delay = Number(inputDelayEl.value);
  const step = Number(inputStepEl.value);
  const amount = Number(inputAmountEl.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(value => {
        Notiflix.Notify.success(value);
        console.log(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
        console.log(error);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
