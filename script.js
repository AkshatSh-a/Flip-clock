let previousValues = {
    hours: '',
    minutes: '',
    seconds: ''
};

function updateClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    if (previousValues.hours !== hours) {
        updateFlip('hours', hours);
        previousValues.hours = hours;
    }
    if (previousValues.minutes !== minutes) {
        updateFlip('minutes', minutes);
        previousValues.minutes = minutes;
    }
    if (previousValues.seconds !== seconds) {
        updateFlip('seconds', seconds);
        previousValues.seconds = seconds;
    }
}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function updateFlip(unit, value) {
    const topElement = document.getElementById(`${unit}-top`);
    const bottomElement = document.getElementById(`${unit}-bottom`);

    if (topElement.innerText !== value) {
        topElement.innerText = value;
        bottomElement.innerText = value;

        const parent = document.getElementById(unit);

        if (parent.classList.contains('flip')) {
            parent.classList.remove('flip');
            void parent.offsetWidth; 
        }
        parent.classList.add('flip');
    }
}

setInterval(updateClock, 1000);
updateClock(); 
