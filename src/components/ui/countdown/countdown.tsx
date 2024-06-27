import { useEffect, useState } from "react";
import s from "./countdown.module.scss";

export const Countdown = () => {
  const [time, setTime] = useState<number>(120);

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);
  

  return (
    <div className={s.countdown}>
      <div className={s.countdown__digit}>
        <div className={s.countdown__digit_number}>
          {`${Math.floor(time / 60)}`.padStart(2, 0)}
        </div>
        <div className={s.countdown__dots}>:</div>
        <div className={s.countdown__digit_number}>
          {`${time % 60}`.padStart(2, 0)}
        </div>
      </div>
    </div>
  );
};
