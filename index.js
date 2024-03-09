const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minsEl = document.querySelector("[data-mins]");
const secsEl = document.querySelector("[data-secs]");



class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
    };
    timer() {
        const inId = setInterval(() => {
            let time = this.targetDate - Date.now();
            if (time <= 0) {
                clearInterval(inId);
                return;
            };

            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minsEl.textContent = mins;
            secsEl.textContent = secs;
        }, 1000);
    };
};
const timerEl = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2024'),
});

timerEl.timer()
