import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IFoodCategory {
  id: number;
  title: string;
  collection: string;
  updated_at: string;
  created_at: string;
}


export const useFoodCategories = () => {
  return useQuery<IFoodCategory[]>({
    queryKey: ["foodCategories"],
    queryFn: () =>
      axios
        .get("http://127.0.0.1:8000/product/categories/")
        .then((res) => res.data),
  });
};
