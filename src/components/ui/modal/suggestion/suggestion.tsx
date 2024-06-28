import { useEffect, useState } from "react";
import { Modal } from "../modal";
import { ExtendedProduct } from "../../main/main";
import { editDataInPopUp } from "../../../../common/functions/editDataInPopUp";
import { getItems } from "../../../../common/functions/getItems";
import { Button } from "../../button/button";
import { Item } from "./item/item";
import { Close } from "../../../close/close";
import s from "./suggestion.module.scss";

export const Suggestion = () => {
  const [items, setItems] = useState<ExtendedProduct[] | null>(null);
  const [pickedItem, setPickedItem] = useState<ExtendedProduct | null>(null);

  useEffect(() => {
    getItems(editDataInPopUp).then((res) => setItems(res as ExtendedProduct[]));
  }, []);

  return (
    <Modal isOpen={true} callBack={() => console.log("yo")}>
      <div className={s.hot}>горящее предложение</div>
      <button className={s.close}><Close /></button>
      <div className={s.modal}>
        <h2>
          Не упусти свой <span>последний шанс</span>
        </h2>

        <p className={s.modal__subtitle}>Мы знаем, как трудно начать.. Поэтому!</p>

        <div className={s.gift}>
          Дарим скидку&nbsp;<span>для лёгкого старта 🏃‍♂️</span>
        </div>

        <div className={s.modal__offer}>
          <p className={s.modal__offer_title}>Посмотри, что мы для тебя приготовили 🔥</p>
          <div className={s.modal__items}>
            {items?.map((el) => {
              return (
                <Item
                  key={el.id}
                  product={el}
                  pickedId={pickedItem?.id}
                  pickItem={setPickedItem}
                />
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
