import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface ICollections {
    id: string,
    created_at: string,
    updated_at: string,
    title: string,
    collection: string
}


export const useCollections = () => {
  return useQuery<ICollections[]>({
    queryKey: ["foodCategories"],
    queryFn: () =>
      axios
        .get("http://127.0.0.1:8000/product/collections/")
        .then((res) => res.data),
  });
};
