import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IFoodMenu {
  id: number;
  text: string;
  url: string;
}

export const useFoodMenu = (foodCategoryName: string) => {
  return useQuery<IFoodMenu[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get(`http://127.0.0.1:8000/product/${foodCategoryName}/`).then((res) => res.data),
  });
};
