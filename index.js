const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minsEl = document.querySelector("[data-mins]");
const secsEl = document.querySelector("[data-secs]");

function removeElTimer() {
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = mins;
    secsEl.textContent = secs;
};

// new CountdownTimer({
    // selector: '#timer-1',
    // targetDate: new Date('Jul 17, 2019'),
// });

let time =  (new Date('Jul 17, 2019') - new Date().getTime()) * -1;

/*
* Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
* мілісекунд в один день (мілісекунди * секунди * хвилини * години)
*/
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);


removeElTimer();