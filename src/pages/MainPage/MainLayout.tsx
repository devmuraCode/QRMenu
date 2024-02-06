import Collections from "@/components/Collections/Collections";
import LocationPub from "@/components/Location/LocationPub";
import Button from "@/shared/ui/Button/Button";
import Header from "@/shared/ui/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="w-full bg-neutral-100">
      <div className="flex-col max-w-[560px] mx-auto bg-white">
        <Header />
        <LocationPub />
        <div className="flex gap-7 p-4">
          <Collections/>
        </div>
        <div className="grow p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
