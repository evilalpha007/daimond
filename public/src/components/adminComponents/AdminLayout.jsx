import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import AdminHeader from "./Header/AdminHeader";
const AdminLayout = ({ children }) => {
  const { adminLogin } = useSelector((state) => state?.auth);
  const location = useLocation();
  return (
    adminLogin &&
    location.pathname.includes("admin") && (
      <div className="admin mobile_width">
        <AdminHeader />
        <div className=" h-full bg-[#ccc]">
          <div className="h-screen   bg-white">{children}</div>
        </div>
      </div>
    )
  );
};

export default AdminLayout;
