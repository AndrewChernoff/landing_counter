import { Countdown } from '../countdown/countdown'
import s from './header.module.scss'

type PropsType = {
  time: number
  setTime: (value: number | ((prevTime: number) => number)) => void
}

export const Header = ({time, setTime}: PropsType) => {
  return (
    <header className={s.header}>
       <p>Скидка действует:</p>
       <Countdown time={time} setTime={setTime} />
    </header>
  )
}
