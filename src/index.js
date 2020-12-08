import './styles.css';

class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.targetDate = targetDate;
    this.daysValue = this.timer.querySelector('[data-value="days"]');
    this.hoursValue = this.timer.querySelector('[data-value="hours"]');
    this.minsValue = this.timer.querySelector('[data-value="mins"]');
    this.secsValue = this.timer.querySelector('[data-value="secs"]');
  }

  getTimeRemaining(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.daysValue.textContent = `${days}`;
    this.hoursValue.textContent = `${hours}`;
    this.minsValue.textContent = `${mins}`;
    this.secsValue.textContent = `${secs}`;
  }
 
  setTimer = setInterval(() => {
      const currentDate = new Date();
      const time = Date.parse(this.targetDate) - Date.parse(currentDate);

      this.endOfTime(time);

      this.getTimeRemaining(time);
    }, 1000);

  pad(value) {
    return String(value).padStart(2, '0'); // add 0 to number '1' --> '01'
  }

  endOfTime(time) {
    if (time <= 0) {
      clearInterval(this.setTimer);
      this.timer.innerHTML = '<p class="text">Time is up!</p>';
    }
  }
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 28, 2020'),
});

const newTimer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jan 11, 2021'),
});



