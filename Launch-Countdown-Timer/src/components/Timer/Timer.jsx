import { useState } from "react";
import Counter from "./Counter";
import styles from "./Timer.module.css";

export default function Timer(props) {
  const [Today, setToday] = useState(new Date());
  const EndDate = props.date;

  setTimeout(() => {
    setToday(new Date());
  }, 1000);

  // get total seconds between the times
  var delta = Math.ceil(Math.abs(EndDate - Today) / 1000);

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60; // in theory the modulus is not required

  return (
    <div className={styles.timer}>
      <Counter value={days} text="Days" />
      <Counter value={hours} text="Hours" />
      <Counter value={minutes} text="Minutes" />
      <Counter value={seconds} text="Seconds" />
    </div>
  );
}
