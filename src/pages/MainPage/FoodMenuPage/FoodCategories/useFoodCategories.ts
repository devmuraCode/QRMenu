import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface IFoodCategory {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface IFoodCategories {
  categories: IFoodCategory[];
}
export const useFoodCategories = () => {
  return useQuery<IFoodCategories>({
    queryKey: ["foodCategories"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
  });
};
