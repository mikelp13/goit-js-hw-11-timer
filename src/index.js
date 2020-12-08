import './styles.css';
import refs from './refs'

class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.targetDate = targetDate;

  }

   getTimeRemaining(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.daysValue.textContent = `${days}`;
    refs.hoursValue.textContent = `${hours}`;
    refs.minsValue.textContent = `${mins}`;
    refs.secsValue.textContent = `${secs}`;
   }

  setTimer = setInterval(() => {
    const currentDate = new Date();
    const time = Date.parse(this.targetDate) - Date.parse(currentDate);

    this.endOfTime(time);

    this.getTimeRemaining(time);

  }, 1000);

  pad(value) {
    return String(value).padStart(2, "0"); // add 0 to number '1' --> '01'
  }

  endOfTime(time) {
    if (time <= 0) {
      clearInterval(this.setTimer);
      this.timer.innerHTML = '<p class="text">Time is up!</p>';
    }
  }
}

const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 28, 2020"),
});


