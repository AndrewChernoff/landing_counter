import classNames from "classnames";
import { Star } from "../../../../icons/star/star";
import { ExtendedProduct } from "../../../main/main";
import s from "./item.module.scss";

type PropsType = {
  product: ExtendedProduct;
  pickedId?: string;
  pickItem: (value: ExtendedProduct) => void;
};

export const Item = ({ product, pickedId, pickItem }: PropsType) => {
  const { name, price, noSalePrice, sale, id } = product;

  const itemCN = classNames(s.item, {
    [s.chosenItem]: pickedId && pickedId === id,
  });

  return (
    <div className={itemCN} onClick={() => pickItem(product)}>
      <div className={s.item_name}>
        <p>{name}</p>
        <label className={s.radio}>
          <input type="radio" checked={pickedId === id} name="radio" />
          <span className={s.checkmark}></span>
        </label>
      </div>

      <div className={s.cross}>
        <div className={s.cross_mark}></div>
        <div className={s.item_discount}>{noSalePrice}P</div>
      </div>

      <div className={s.item_price}>
        <p className={s.item_price_number}>{price}₽</p>
        <div className={s.star}>
          <div className={s.star__icon}>
            <Star sale={sale} height={"50"} width={"50"} />
          </div>
        </div>
      </div>
    </div>
  );
};
