import { ExtendedProduct } from "../../components/ui/main/main";

export const editAfterTimerEnds = (data: ExtendedProduct[]): ExtendedProduct[] => {
  const filteredData = data.filter((el) => el.isDiscount === false && el.isPopular === false); 
  
    ///edit data after countdown finishs
    const newData = filteredData.map((el) => {
      if (el.name === "1 неделя") {
        el.descr = "Чтобы просто начать  👍🏻";
      } else if (el.name === "1 месяц") {
        el.descr = "Привести тело впорядок 💪🏻";
      } else if (el.name === "3 месяца") {
        el.descr = "Изменить образ жизни 🔥";
      } else if (el.name === "навсегда") {
        el.descr = "Всегда быть в форме и поддерживать своё здоровье ⭐";
      }
      return el;
    });
  
    return newData;
  };