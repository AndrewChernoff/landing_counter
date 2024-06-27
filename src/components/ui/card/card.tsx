import classNames from "classnames";
import { Star } from "../../icons/star/star";
import { ExtendedProduct } from "../main/main";
import s from "./card.module.scss";

type PropsType = ExtendedProduct & { index: number; chooseItem: (id: string) => void; chosenId: string }

export const Card = ({
  id,
  name,
  price,
  noSalePrice,
  descr,
  index,
  sale,
  chooseItem,
  chosenId
}: PropsType) => {

  const itemCN = classNames({ [s.card]: index !== 3 }, {[s.lastCard] : index === 3}, {[s.chosenItem] : id === chosenId})
  
  return (
    <>
      <div className={itemCN} onClick={() => chooseItem(id)}>
        <div className={s.card__name}>{name}</div>
        <div className={s.card__cost}>
          <div className={s.card__price}>{price}₽</div>
          <div className={s.card__noSalePrice}>{noSalePrice}₽</div>
        </div>
        <div className={s.card__descr}>{descr}</div>
        <div className={s.star}>
          <Star sale={sale}/>
        </div>
      </div>
    </>
  );
};
