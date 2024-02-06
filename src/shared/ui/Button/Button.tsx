import { ICollections } from "@/hooks/useCollections";
import { FC } from "react";

interface TProps {
  collectins: ICollections;
}
const Button: FC<TProps> = (props) => {
  const { collectins } = props;

  return (
      <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
      {collectins.title}
    </button>
  );
};

export default Button;
