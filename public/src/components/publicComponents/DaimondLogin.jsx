import React from "react";
import { useDispatch } from "react-redux";
import {
  handelAdminLogin,
  handelLogin,
} from "../../store/features/auth/authSlice";

const DaimondLogin = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-600 h-screen  pt-32">
      <img src="./assets/logo.png" alt="" className="mx-auto mb-2" />
      <div className="bg-white flex flex-col max-w-[400px] rounded p-5 gap-4 mx-auto shadow-lg ">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-[1px] bg-blue-400" />
          <div className="text-3xl text-blue-400 ">Sign In</div>
          <div className="w-16 h-[1px] bg-blue-400" />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-400 focus:outline-blue-400 p-1 px-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-400 focus:outline-blue-400  p-1 px-2 rounded"
        />
        <button
          className="bg-blue-500 text-white p-1 rounded"
          onClick={() => dispatch(handelAdminLogin({ adminLogin: true }))}
        >
          Login
        </button>
        <button
          className="bg-blue-500 text-white p-1 rounded"
          //   onClick={() => dispatch(handelAdminLogin({ adminLogin: true }))}
          onClick={() => {
            dispatch(handelLogin({ login: true, hidePublicRoutes: true }));
          }}
        >
          Login In With Demo Id
        </button>
      </div>
    </div>
  );
};

export default DaimondLogin;
