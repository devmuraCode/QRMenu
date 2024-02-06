import { FC } from "react";
import { IFoodCategory } from "../FoodCategories/useFoodCategories";
import { Link } from "react-router-dom";
import { RoutePath } from "@/routes";

type TProps = {
  foodCategory: IFoodCategory;
};
const FoodCategoryItem: FC<TProps> = ({ foodCategory }) => {
  const { title } = foodCategory;

  return (
    <Link to={`${RoutePath.foodCategories}/products`}>
      <div className="max-full h-[176px] bg-white border border-gray-200 rounded-[26px] shadow dark:bg-gray-800 dark:border-gray-700 my-3">
        <div className="p-5 flex justify-center align-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-shadow-sm text-gray-900 dark:text-white">
              {title}
            </h1>
        </div>
      </div>
    </Link>
  );
};

export default FoodCategoryItem;
