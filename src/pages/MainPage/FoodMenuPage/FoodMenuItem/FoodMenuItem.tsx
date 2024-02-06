import { FC } from "react";
import { IFoodMenuItem } from "../FoodMenu/useFoodMenu";

interface TProps {
  foodMenuItem: IFoodMenuItem;
}

const FoodMenuItem: FC<TProps> = (props) => {
  const { foodMenuItem } = props;
  return (
    <div className="max-full rounded overflow-hidden shadow-lg my-4">
      <img
        className="w-full object-cover"
        src={foodMenuItem.img}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{foodMenuItem.title}</div>
        <p className="text-gray-700 text-base">{foodMenuItem.description}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-orange-500">
          {foodMenuItem.prise} ₽
        </h1>
        <div className="rounded-full px-2 pb-1 bg-orange-500 flex">
          <button className="font-bold text-white text-2xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuItem;
