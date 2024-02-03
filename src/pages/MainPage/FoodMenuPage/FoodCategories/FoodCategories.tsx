import FoodCategoryItem from "../FoodCategoryItem/FoodCategoryItem";
import { IFoodCategory, useFoodCategories } from "./useFoodCategories";

const FoodCategories = () => {
  const { data: foodsCategories, error, isPending } = useFoodCategories();
   
  console.log(foodsCategories);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="">
        {foodsCategories.map((el: IFoodCategory) => {
            return <FoodCategoryItem foodCategory={el} key={el.id} />
        })}
    </div>
  );
};

export default FoodCategories;
