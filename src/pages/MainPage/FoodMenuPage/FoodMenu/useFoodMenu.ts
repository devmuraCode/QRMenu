import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IFoodMenuItem {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  prise: number;
  img: string;
  category: string;
}

export const useFoodMenu = (foodCategoryName: string) => {
  return useQuery<IFoodMenuItem[]>({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get(`http://127.0.0.1:8000/product/${foodCategoryName}/`).then((res) => res.data),
  });
};
