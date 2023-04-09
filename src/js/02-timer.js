import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const buttonStartEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let timerId = null;
let timer;

buttonStartEl.disabled = true;
buttonStartEl.addEventListener('click', clickOnStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer = selectedDates[0] - options.defaultDate;
    if (timer < 0) {
      buttonStartEl.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonStartEl.disabled = false;
    }
  },
};
flatpickr(inputEl, options);

function clickOnStart() {
  buttonStartEl.disabled = true;
  timerId = setInterval(() => {
    timer -= 1000;
    dateInFuture = convertMs(timer);
    daysEl.textContent = addLeadingZero(dateInFuture.days);
    hoursEl.textContent = addLeadingZero(dateInFuture.hours);
    minutesEl.textContent = addLeadingZero(dateInFuture.minutes);
    secondsEl.textContent = addLeadingZero(dateInFuture.seconds);
    if (timer < 1000) {
      clearInterval(timerId);
      return;
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
