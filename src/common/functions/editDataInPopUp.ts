import { ExtendedProduct } from "../../components/ui/main/main";

export const editDataInPopUp = (data: ExtendedProduct[]): ExtendedProduct[] => {
    const filterData = data.filter((el) => el.isDiscount === true);
  
    const newData = filterData.map((el) => {
      if (el.price === 599) {
        el.sale = 40;
        el.noSalePrice = 999;
      } else if (el.price === 799) {
        el.sale = 50;
        el.noSalePrice = 1690;
      } else if (el.price === 1690) {
        el.sale = 60;
        el.price = 1690;
      }
      return el;
    });
  
    return newData;
  };