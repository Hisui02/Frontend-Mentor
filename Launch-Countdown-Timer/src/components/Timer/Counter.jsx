import styles from "./Counter.module.css";

export default function Counter(props) {
  return (
    <div className={styles.counter}>
      <h1>
        <a className={styles["half-color"]}>{props.value}</a>
      </h1>
      <span>{props.text}</span>
    </div>
  );
}
