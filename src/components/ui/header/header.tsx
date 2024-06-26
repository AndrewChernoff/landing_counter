import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
       <p>Скидка действует:</p>
       <div className={s.countdown}>
            <div className={s.countdown__digit}>
                <div className={s.countdown__digit_number}>09</div>
                <div className={s.countdown__digit_messure}>минут</div>
            </div>
            <div className={s.countdown__dots}>:</div>
            <div className={s.countdown__digit}>
                <div className={s.countdown__digit_number}>59</div>
                <div className={s.countdown__digit_messure}>секунд</div>
            </div>
       </div>
    </header>
  )
}
