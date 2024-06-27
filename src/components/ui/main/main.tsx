import { useEffect, useState } from "react";
import man from "../../../common/imgs/man.png";
import containerStyles from "../../../common/styles/mainContainer.module.scss";
import { Product } from "../../../common/types/types";
import { Card } from "../card/card";
import { Button } from "../button/button";
import s from "./main.module.scss";
import { getItems } from "../../../common/functions/getItems";
import { editDataBeforePopUp } from "../../../common/functions/editBeforePopUp";

export type ExtendedProduct = Product & {
  noSalePrice: number;
  descr: string;
  sale: number;
};

type PropsType = {
  time: number
}

export const Main = ({time}: PropsType) => {
  const [items, setItems] = useState<ExtendedProduct[] | null>(null);
  const [chosenItem, setChosenItem] = useState<ExtendedProduct | null>(null)  


  useEffect(() => {
    getItems(editDataBeforePopUp).then((res) => setItems(res as ExtendedProduct[]));
  }, []);

  const chooseItem = (item: ExtendedProduct) => setChosenItem(item)

  const filterProducts = (items: ExtendedProduct[]) => {
    if (time !== 0) {
      return items.filter((el) => (el.isPopular === true))
    } else {
      return items.filter((el) => (el.isPopular === false && el.isDiscount === false)
    )
    }
  };

  return (
    <div className={s.main}>
      <div className={containerStyles.container}>
        <h1>Выберите подходящий тарифный план</h1>

        <div className={s.main__content}>
          <img src={man} alt="man image" />
          <div className={s.main__content_info}>
            <div className={s.main__content_items}>
              {/* {items
                ?.filter((el) =>
                  time !== 0 ? el.isPopular === true : el.isPopular === false
                )
                .map((el, index) => {
                  return <Card key={el.id} timeIsUp={time !== 0} index={index} chosenId={chosen} chooseItem={chooseItem} {...el} />;
                })} */}
                {items && filterProducts(items)
                ?.filter((el) =>
                  time !== 0 ? el.isPopular === true : el.isPopular === false
                )
                .map((el, index) => {
                  return <Card key={el.id} timeIsUp={time !== 0} index={index} pickedItem={chosenItem} chooseItem={chooseItem} product={el} />;
                })}
            </div>
            <p className={s.main__content_descr}>
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
              <label className={s.policy}>
                <input type="checkbox" />
                <span className={s.checkmark}></span> 
                <p>Я соглашаюсь с{" "}
                <span className={s.policy__blue}>Правилами сервиса</span> и условиями{" "}
                <span className={s.policy__blue}> Публичной оферты</span>.
                </p>
                <span className={s.checkmark}></span>
              </label>
              <Button size="small" className={s.buy__btn}>Купить</Button>

              <p className={s.policy__agree}>Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
