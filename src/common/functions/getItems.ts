import { ExtendedProduct } from "../../components/ui/main/main";
import { Product } from "../types/types";

export const getItems = async (callBack: (arr: any[]) => ExtendedProduct[] ) => {
  const response = await fetch("https://t-pay.iqfit.app/subscribe/list-test");

  if (response.ok) {
    const data: Promise<Product[]> = await response.json();
    return callBack(data as any);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
};
