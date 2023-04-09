const buttonStartEl = document.querySelector("button[data-start]");
const buttonStopEl = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");

buttonStartEl.addEventListener('click', clickOnStart);
buttonStopEl.addEventListener('click', clickOnStop)

function clickOnStart() {
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
      }, 1000);
      buttonStartEl.disabled = true;
      buttonStopEl.disabled = false;
};
function clickOnStop() {
    clearInterval(timerId);
    buttonStartEl.disabled = false;
    buttonStopEl.disabled = true;
};
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

