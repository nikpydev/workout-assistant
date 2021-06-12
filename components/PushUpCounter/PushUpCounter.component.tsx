import { useState } from 'react';
import LeftArrowIcon from '../../public/left-arrow.svg';
import RightArrowIcon from '../../public/right-arrow.svg';
import ResetArrowIcon from '../../public/reset-arrow.svg';
import styles from './PushUpCounter.module.scss';

const PushUpCounter = () => {
  const [pushUpCount, setPushUpCount] = useState<number>(0);

  const increaseCount = () => {
    setPushUpCount((prevState) => prevState + 1);
  };

  const decreaseCount = () => {
    pushUpCount > 0 && setPushUpCount((prevState) => prevState - 1);
  };

  const resetCount = () => {
    setPushUpCount(0);
  };

  return (
    <div>
      <h1 className={styles.sectionHeader}>Push Up Counter</h1>
      <h3 className={styles.pushUpCount}>{pushUpCount}</h3>
      <div className={styles.buttonsContainer}>
        <div className={styles.leftArrow} onClick={decreaseCount}>
          <LeftArrowIcon />
        </div>
        <div className={styles.resetArrow} onClick={resetCount}>
          <ResetArrowIcon />
        </div>
        <div className={styles.rightArrow} onClick={increaseCount}>
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default PushUpCounter;
