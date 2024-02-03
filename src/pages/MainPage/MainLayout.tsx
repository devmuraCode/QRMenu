import LocationPub from "@/components/location/LocationPub";
import Button from "@/shared/ui/Button/Button";
import Header from "@/shared/ui/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className=" flex-col h-screen max-w-[560px] mx-auto">
      <Header/>
      <LocationPub/>
      <div className="flex gap-7 p-4">
        <Button/>
        <Button/>
      </div>
      <div className="grow p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
