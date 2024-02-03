import { useParams } from "react-router-dom";
import { IFoodMenuItem, useFoodMenu } from "./useFoodMenu";
import FoodMenuItem from "../FoodMenuItem/FoodMenuItem";

const FoodMenu = () => {
  const { foodCategoryName } = useParams<{ foodCategoryName: string }>();

  const {
    data: foodMenu,
    error,
    isLoading,
  } = useFoodMenu(foodCategoryName || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  console.log("foodMenu", foodMenu);

  return (
    <div>
      {foodMenu?.map((el: IFoodMenuItem) => {
        return <FoodMenuItem foodMenuItem={el} key={el.id} />;
      })}
    </div>
  );
};

export default FoodMenu;
