import { useEffect, useState } from "react";
import { Modal } from "../modal";
import s from './suggestion.module.scss'
import { ExtendedProduct } from "../../main/main";
import { editDataInPopUp } from "../../../../common/functions/editDataInPopUp";
import { getItems } from "../../../../common/functions/getItems";

export const Suggestion = () => {
  const [items, setItems] = useState<ExtendedProduct[] | null>(null);

  useEffect(() => {
    getItems(editDataInPopUp).then((res) => setItems(res as ExtendedProduct[]));
  }, []);

  console.log(items);
  
  return (
    <Modal isOpen={false} callBack={() => console.log('yo')}>
      <div className={s.modal}>
        <h2>
          Не упусти свой <span>последний шанс</span>
        </h2>

        <p>Мы знаем, как трудно начать.. Поэтому!</p>

        <div className={s.gift}>Дарим скидку <span>для лёгкого старта 🏃‍♂️</span></div>

        <div className={s.modal__offer}>
          <p>Посмотри, что мы для тебя приготовили 🔥</p>
          <div className={s.modal__items}>
            <div className={s.modal__item}>
              
            </div>
          </div>
        </div>

      </div>
    </Modal>
  );
};
