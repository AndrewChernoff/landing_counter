import { useEffect, useState } from "react";
import man from "../../../common/imgs/man.png";
import containerStyles from "../../../common/styles/mainContainer.module.scss";
import { Product } from "../../../common/types/types";
import { Card } from "../card/card";
import { Button } from "../button/button";
import { getItems } from "../../../common/functions/getItems";
import { editBeforeTimerEnds } from "../../../common/functions/editBeforeTimerEnds";
import { editAfterTimerEnds } from "../../../common/functions/editAfterTimerEnds";
import s from "./main.module.scss";

export type ExtendedProduct = Product & {
  noSalePrice: number;
  descr: string;
  sale: number;
};

type PropsType = {
  time: number;
};

export const Main = ({ time }: PropsType) => {
  const [items, setItems] = useState<ExtendedProduct[] | null>(null);
  const [chosenItem, setChosenItem] = useState<ExtendedProduct | null>(null);
  const timeIsUp = time !== 0; ///if timer reached 00:00

  useEffect(() => {
    if (timeIsUp) {
      getItems(editBeforeTimerEnds).then((res) =>
        setItems(res as ExtendedProduct[])
      );
    } else {
      getItems(editAfterTimerEnds).then((res) =>
        setItems(res as ExtendedProduct[])
      );
    }
  }, [timeIsUp]);

  const chooseItem = (item: ExtendedProduct) => setChosenItem(item);

  return (
    <div className={s.main}>
      <div className={containerStyles.container}>
        <h1>Выберите подходящий тарифный план</h1>

        <div className={s.main__content}>
          <img src={man} alt="man image" />
          <div className={s.main__content_info}>
            <div className={s.main__content_items}>
              {
                items?.map((el, index) => {
                  return (
                    <Card
                      key={el.id}
                      timeIsUp={timeIsUp}
                      index={index}
                      pickedItem={chosenItem}
                      chooseItem={chooseItem}
                      product={el}
                    />
                  );
                })
              }
            </div>
            <p className={s.main__content_descr}>
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <label className={s.policy}>
              <input type="checkbox"/>
              <span className={s.checkmark}></span>
              <p>
                Я соглашаюсь с{" "}
                <span className={s.policy__blue}>Правилами сервиса</span> и
                условиями{" "}
                <span className={s.policy__blue}> Публичной оферты</span>.
              </p>
              <span className={s.checkmark}></span>
            </label>
            <Button size="small" className={s.buy__btn}>
              Купить
            </Button>

            <p className={s.policy__agree}>
              Нажимая «Купить», Пользователь соглашается на автоматическое
              списание денежных средств по истечению купленного периода.
              Дальнейшие списания по тарифам участвующим в акции осуществляются
              по полной стоимости согласно оферте.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
