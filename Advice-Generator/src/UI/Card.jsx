import styles from "./Card.module.css";

export default function (props) {
  const classes = `${props.className} ${styles.Card}`;
  return <div className={classes}>{props.children}</div>;
}
