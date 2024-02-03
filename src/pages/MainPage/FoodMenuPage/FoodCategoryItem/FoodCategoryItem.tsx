import { FC } from "react";
import { IFoodCategory } from "../FoodCategories/useFoodCategories";
import { Link } from "react-router-dom";
import { RoutePath } from "@/routes";

type TProps = {
  foodCategory: IFoodCategory;
};
const FoodCategoryItem: FC<TProps> = ({ foodCategory }) => {
  const {title} = foodCategory;

  return (
    <Link to={`${RoutePath.foodCategories}/products`}>
    <div className="max-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3 text-center">
      <div className="p-5">
        <a href="#">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h1>
        </a>
      </div>
    </div>
    </Link>
  );
};

export default FoodCategoryItem;
