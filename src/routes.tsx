import { createBrowserRouter } from "react-router-dom";
import FoodCategories from "./pages/MainPage/FoodMenuPage/FoodCategories/FoodCategories";
import MainLayout from "./pages/MainPage/MainLayout";

export enum AppRoutes {
  MAIN = "main",
  FOOD_CATEGORIES = "foodCategories",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.FOOD_CATEGORIES]: "/foodCategories",
  [AppRoutes.NOT_FOUND]: "*",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: RoutePath.foodCategories,
        element: <FoodCategories />,
      }
    ],
  },
]);
