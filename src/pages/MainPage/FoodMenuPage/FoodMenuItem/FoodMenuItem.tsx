import { FC } from "react";
import { IFoodMenuItem } from "../FoodMenu/useFoodMenu";

interface TProps {
  foodMenuItem: IFoodMenuItem;
}

const FoodMenuItem: FC<TProps> = (props) => {
  const { foodMenuItem } = props;
  return (
    <div className="max-full rounded overflow-hidden shadow-lg">
      <img
        className="w-full object-cover"
        src={foodMenuItem.img}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{foodMenuItem.title}</div>
        <p className="text-gray-700 text-base">
          {foodMenuItem.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* Button */}
      </div>
    </div>
  );
};

export default FoodMenuItem;
