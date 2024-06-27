import { ExtendedProduct } from "../../components/ui/main/main";

export const editDataBeforePopUp = (data: ExtendedProduct[]): ExtendedProduct[] => {
    ///edit data before countdown finishs
    const newData = data.map((el) => {
      if (el.name === "1 неделя") {
        el.sale = 30;
        el.descr = "Чтобы просто начать  👍🏻";
        el.noSalePrice = 999;
      } else if (el.name === "1 месяц") {
        el.sale = 40;
        el.descr = "Привести тело впорядок 💪🏻";
        el.noSalePrice = 2990;
      } else if (el.name === "3 месяца") {
        el.sale = 50;
        el.descr = "Изменить образ жизни 🔥";
        el.noSalePrice = 5990;
      } else if (el.name === "навсегда") {
        el.sale = 70;
        el.descr = "Всегда быть в форме и поддерживать своё здоровье ⭐";
        el.noSalePrice = 18990;
      }
      return el;
    });
  
    return newData;
  };