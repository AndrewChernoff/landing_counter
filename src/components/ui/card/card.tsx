import classNames from "classnames";
import { Star } from "../../icons/star/star";
import { ExtendedProduct } from "../main/main";
import s from "./card.module.scss";
import useWindowDimensions from "../../../common/hooks/useWindowDimensions";

type PropsType = {
  product: ExtendedProduct
  index: number;
  chooseItem: (id: ExtendedProduct) => void;
  timeIsUp: boolean;
  pickedItem: ExtendedProduct | null
};

export const Card = ({
  product,
  pickedItem,
  chooseItem,
  timeIsUp, index
}: PropsType) => {

  const {
    id,
    name,
    price,
    noSalePrice,
    descr,
    sale
} = product

const { width } = useWindowDimensions();

  console.log(width);
  //&& width > 740

  //const itemCN = classNames({ [s.card]: index !== 3 }, {[s.lastCard] : index === 3 }, {[s.chosenItem] : id === pickedItem?.id})
  /* const itemCN = () => {
    if (width > 740) {
      return classNames({ [s.card]: index !== 3 }, {[s.lastCard] : index === 3 }, {[s.chosenItem] : id === pickedItem?.id})
    } else {
      return classNames([s.card], {[s.chosenItem] : id === pickedItem?.id})
    }
  } */
  const itemCN = width > 740 ? classNames({ [s.card]: index !== 3 }, {[s.lastCard] : index === 3 }, {[s.chosenItem] : id === pickedItem?.id}) : classNames([s.card], {[s.chosenItem] : id === pickedItem?.id})  

  return (
    <>
      <div className={itemCN} onClick={() => chooseItem(product)}>
        <div className={s.card__name}>{name}</div>
        <div className={s.card__cost}>
          <div className={s.card__price}>{price}₽</div>
          {timeIsUp && <div className={s.card__noSalePrice}>{noSalePrice}₽</div> }
        </div>
        <div className={s.card__descr}>{descr}</div>
        {timeIsUp &&<div className={s.star}>
          <Star sale={sale}/>
        </div>}
      </div>
    </>
  );
};
