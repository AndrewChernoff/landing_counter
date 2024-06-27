import { Star } from "../../icons/star/star";
import { ExtendedProduct } from "../main/main";
import s from "./card.module.scss";

export const Card = ({
  name,
  price,
  noSalePrice,
  descr,
  index,
  sale,
}: ExtendedProduct & { index: number }) => {
  return (
    <>
      <div className={index !== 3 ? s.card : s.lastCard}>
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
