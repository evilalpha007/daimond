import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import PrivateHeader from "./header/PrivateHeader";
import PrivateSidebar from "./PrivateSidebar";
import PrivateMobImage from "./PrivateMobImage";

const PrivateLayout = ({ children }) => {
  const { login } = useSelector((state) => state.auth);
  const location = useLocation();
  return (
    login &&
    !location.pathname.includes("admin") && (
      <div>
        <PrivateHeader />
        <div className="flex h-full bg-[#ccc]">
          <PrivateSidebar />
          <div className="min-h-[calc(100vh_-_135px)] w-full bg-white">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default PrivateLayout;
// <PrivateMobImage />
