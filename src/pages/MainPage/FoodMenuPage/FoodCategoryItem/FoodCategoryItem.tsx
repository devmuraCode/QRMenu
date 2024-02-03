import { FC } from "react";
import { IFoodCategory } from "../FoodCategories/useFoodCategories";

type TProps = {
  foodCategory: IFoodCategory;
};
const FoodCategoryItem: FC<TProps> = ({ foodCategory }) => {
  const {title} = foodCategory;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h1>
        </a>
      </div>
    </div>
  );
};

export default FoodCategoryItem;
