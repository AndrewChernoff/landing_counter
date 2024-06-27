import { useEffect, useState } from "react";
import man from "../../../common/imgs/man.png";
import containerStyles from "../../../common/styles/mainContainer.module.scss";
import { Product } from "../../../common/types/types";
import { Card } from "../card/card";
import { Button } from "../button/button";
import s from "./main.module.scss";

export type ExtendedProduct = Product & {
  noSalePrice: number;
  descr: string;
  sale: number;
};

const editData = (data: ExtendedProduct[]): ExtendedProduct[] => {
  ///edit data before countdown finishs
  const newData = data.map((el) => {
    if (el.name === "1 неделя" && el.isPopular === true) {
      el.sale = 30;
      el.descr = "Чтобы просто начать";
      el.noSalePrice = 999;
    } else if (el.name === "1 месяц" && el.isPopular === true) {
      el.sale = 40;
      el.descr = "Привести тело впорядок";
      el.noSalePrice = 2990;
    } else if (el.name === "3 месяца" && el.isPopular === true) {
      el.sale = 50;
      el.descr = "Изменить образ жизни";
      el.noSalePrice = 5990;
    } else if (el.name === "навсегда" && el.isPopular === true) {
      el.sale = 70;
      el.descr = "Всегда быть в форме и поддерживать своё здоровье";
      el.noSalePrice = 18990;
    }
    return el;
  });

  return newData;
};

export const Main = () => {
  const [items, setItems] = useState<ExtendedProduct[] | null>(null);
  const [chosen, setChosen] = useState<string | null>(null)
  const timer = true;

  const getItems = async () => {
    const response = await fetch("https://t-pay.iqfit.app/subscribe/list-test");

    if (response.ok) {
      const data: Promise<Product[]> = await response.json();
      return editData(data as any);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  };

  useEffect(() => {
    getItems().then((res) => setItems(res as ExtendedProduct[]));
  }, []);

  const chooseItem = (id: string) => setChosen(id)

  return (
    <div className={s.main}>
      <div className={containerStyles.container}>
        <h1>Выберите подходящий тарифный план</h1>

        <div className={s.main__content}>
          <img src={man} alt="man image" />
          <div className={s.main__content_info}>
            <div className={s.main__content_items}>
              {items
                ?.filter((el) =>
                  timer ? el.isPopular === true : el.isPopular === false
                )
                .map((el, index) => {
                  return <Card key={el.id} index={index} chosenId={chosen} chooseItem={chooseItem} {...el} />;
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
