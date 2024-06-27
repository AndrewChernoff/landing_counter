import { Countdown } from '../countdown/countdown'
import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
       <p>Скидка действует:</p>
       <Countdown />
    </header>
  )
}
