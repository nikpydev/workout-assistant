import { useState } from 'react';
import LeftArrowIcon from '../Icons/LeftArrowIcon.component';
import RefreshIcon from '../Icons/RefreshIcon.component';
import RightArrowIcon from '../Icons/RightArrowIcon.component';
import styles from './PushUpCounter.module.scss';

const DefaultCountdownTimerValue = 150;
let timerInstance: any;

const PushUpCounter = () => {
  const [pushUpCount, setPushUpCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const increaseCount = () => {
    setPushUpCount((prevState) => prevState + 1);
    rundownTimer();
  };

  const decreaseCount = () => {
    pushUpCount > 0 && setPushUpCount((prevState) => prevState - 1);
    setTimer(0);
    clearInterval(timerInstance);
  };

  const resetCount = () => {
    setPushUpCount(0);
    setTimer(0);
    clearInterval(timerInstance);
  };

  const rundownTimer = () => {
    let countdownValue = DefaultCountdownTimerValue;
    setTimer(DefaultCountdownTimerValue);

    timerInstance = setInterval(() => {
      setTimer((prevState) => (prevState > 0 ? prevState - 1 : 0));

      if (countdownValue > 0) {
        countdownValue -= 1;
      }

      if (countdownValue <= 0) {
        clearInterval(timerInstance);
      }
    }, 1000);
  };

  const renderTitleText = () => {
    return <h1 className={styles.sectionHeader}>Push-Up Counter</h1>;
  };

  const renderIncrementButton = () => {
    return (
      <div className={styles.rightArrow} onClick={increaseCount}>
        <RightArrowIcon />
      </div>
    );
  };

  const renderDecrementButton = () => {
    return (
      <div className={styles.leftArrow} onClick={decreaseCount}>
        <LeftArrowIcon />
      </div>
    );
  };

  const renderResetButton = () => {
    return (
      <div className={styles.resetArrow} onClick={resetCount}>
        <RefreshIcon />
      </div>
    );
  };

  const renderTimerCount = () => {
    return (
      <h3 className={styles.counterText}>
        {timer && `${timer} seconds remaining`}
      </h3>
    );
  };

  return (
    <div>
      {renderTitleText()}
      {!!timer && renderTimerCount()}
      <h3 className={styles.pushUpCount}>Set: {pushUpCount}</h3>
      <div className={styles.buttonsContainer}>
        {renderDecrementButton()}
        {renderResetButton()}
        {!timer && renderIncrementButton()}
      </div>
    </div>
  );
};

export default PushUpCounter;
