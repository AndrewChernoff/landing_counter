import { useEffect, useState } from "react";
import { Modal } from "../modal";
import { ExtendedProduct } from "../../main/main";
import { editDataInPopUp } from "../../../../common/functions/editDataInPopUp";
import { getItems } from "../../../../common/functions/getItems";
import s from "./suggestion.module.scss";
import { Star } from "../../../icons/star/star";
import { Button } from "../../button/button";

export const Suggestion = () => {
  const [items, setItems] = useState<ExtendedProduct[] | null>(null);

  useEffect(() => {
    getItems(editDataInPopUp).then((res) => setItems(res as ExtendedProduct[]));
  }, []);
  console.log(items);

  return (
    <Modal isOpen={true} callBack={() => console.log("yo")}>
      <div className={s.modal}>
        <h2>
          Не упусти свой <span>последний шанс</span>
        </h2>

        <p>Мы знаем, как трудно начать.. Поэтому!</p>

        <div className={s.gift}>
          Дарим скидку <span>для лёгкого старта 🏃‍♂️</span>
        </div>

        <div className={s.modal__offer}>
          <p>Посмотри, что мы для тебя приготовили 🔥</p>
          <div className={s.modal__items}>
            {items?.map((el) => {
              return (
                <div className={s.modal__item}>
                  <div className={s.modal__item_name}>
                    <p>{el.name}</p>
                    <label className={s.radio}>
                      <input
                        type="radio"
                        /* checked="checked" */ name="radio"
                      />
                      <span className={s.checkmark}></span>
                    </label>
                  </div>

                  <div className={s.modal__item_discount}>
                    {el.noSalePrice}P
                  </div>
            
                  <div className={s.modal__item_price}>
                    <p>{el.price}₽</p>
                    <div className={s.star}>
                      <div className={s.star__icon}>
                        <Star sale={el.sale} height={"50"} width={"50"} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Button size="large" callback={() => console.log("yo")}>
          Начать
        </Button>
      </div>
    </Modal>
  );
};
