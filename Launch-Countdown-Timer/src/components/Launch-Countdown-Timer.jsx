import Timer from "./Timer/Timer";
import Icons from "./Icons/Icons";

import styles from "./Launch-Countdown-Timer.module.css";

export default function LaunchCountdownTimer() {
  const EndDate = new Date("2024-01-01T00:00:00");

  return (
    <div className={styles["main-div"]}>
      <div className={styles["top-part"]}>
        <span className={styles["header-text"]}>We' re launching soon</span>
        <Timer date={EndDate} />
      </div>
      <div className={styles["bottom-part"]}>
        <Icons />
      </div>
    </div>
  );
}
