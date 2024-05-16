import React, { useEffect, useRef } from 'react';
import styles from './Progress.module.css';
// import progressBarline from '../assets/icons/progressBarline.svg'

const Progress = ({ percent }) => {
    const barRef = useRef(null);
    const valRef = useRef(null);

    useEffect(() => {
        const $bar = barRef.current;
        const $val = valRef.current;

        const getColor = (p) => {
            if (p <= 50) return 'red';
            if (p <= 90) return '#ffc700';
            return '#62af00';
        };

        const animateProgress = () => {
            let p = 0;
            const interval = setInterval(() => {
                if (p >= percent) {
                    clearInterval(interval);
                } else {
                    p++;
                    $bar.style.transform = `rotate(${45 + p * 1.8}deg)`;
                    $bar.style.borderBottomColor = getColor(p);
                    $bar.style.borderRightColor = getColor(p);
                    $val.textContent = p;
                }
            }, 5);
        };

        animateProgress();

        // Cleanup function
        return () => {
            clearInterval(animateProgress);
        };
    }, [percent]);

    return (
      <div className={styles.progress}>
        <div className={styles.barOverflow}>
            <div ref={barRef} className={styles.bar}></div>
            
        </div>
        <div ref={valRef} className={styles.percent}>
          {percent}
        </div>
        <div className={styles.matchScore}>Match Score</div>
      </div>
    );
};

export default Progress;
