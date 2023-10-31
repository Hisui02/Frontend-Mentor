import { useState, useEffect } from "react";
import styles from "./AdviceGenerator.module.css";
import Card from "../UI/Card";

export default function AdviceGenerator() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState();
  const [isRolling, setIsRolling] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        let { advice, id } = data.slip;
        setAdvice(advice);
        setAdviceId(id);
        setIsRolling(false);
      });
  }, []);

  const separatorClasses = `${styles.main} ${styles.separator}`;
  const diceClasses = `${styles.RerollButton}  ${
    isRolling ? styles.rolling : ""
  }`;

  const ButtonClickHandler = () => {
    setIsRolling(true);
    setTimeout(() => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          let { advice, id } = data.slip;
          setAdvice(advice);
          setAdviceId(id);
          setIsRolling(false);
        });
    }, 1000);
  };

  return (
    <Card>
      <div className={styles.main}>
        <h5 className={styles.header}>ADVICE #{adviceId}</h5>
        <p className={styles.descrip}>"{advice}"</p>
      </div>
      <div className={separatorClasses}>
        <svg
          className={styles.separator}
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.main}>
        <button className={diceClasses} onClick={ButtonClickHandler}>
          <div className={styles.square}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </div>
        </button>
      </div>
    </Card>
  );
}
