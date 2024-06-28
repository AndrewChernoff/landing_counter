import { useEffect, useState } from "react";
import s from "./countdown.module.scss";

type PropsType = {
    time: number
    setTime: (value: number | ((prevTime: number) => number)) => void
  }

export const Countdown = ({time, setTime} : PropsType) => {
  const [blink, setBlink] = useState(false)

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

    if (time === 30) {
        setBlink(true)
    }

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [setTime, time]);  

  return (
    <div className={s.countdown}>
      <div className={`${s.countdown__digit} ${blink && s.blink}`}>
        <div className={s.countdown__digit_number} style={{color: `${blink && '#FD4D35'}`}}>
          {`${Math.floor(time / 60)}`.padStart(2, '0')}
        </div>
        <div className={s.countdown__dots} style={{color: `${blink && '#FD4D35'}`}}>:</div>
        <div className={s.countdown__digit_number} style={{color: `${blink && '#FD4D35'}`}}>
          {`${time % 60}`.padStart(2, '0')}
        </div>
      </div>

      <div className={s.countdown__messure}>
        <div className={s.countdown__messure_item}>минут</div>
        <div className={s.countdown__messure_item}>секунд</div>
      </div>
    </div>
  );
};
