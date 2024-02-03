import { useParams } from "react-router-dom";
import { useFoodMenu } from "./useFoodMenu";

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

  return <div>FoodMenu</div>;
};

export default FoodMenu;
