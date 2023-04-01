import React from "react";

const PrivateChangePassword = () => {
  return (
    <div>
      <div className="profit_loss_inner mt-1 mx-1 p-2 bg-[#0f2462] ">
        <h2 className="text-white text-2xl">Change Password</h2>
      </div>
      <div className="passwords_field p-6  flex flex-col">
        <label htmlFor=""> Current Password</label>
        <input
          type="password"
          className="border-[#ccc] w-[300px] mt-2 mb-4 p-2 border-[1px] text-[#555]  rounded"
          placeholder="Current Password"
        />
        <label htmlFor=""> New Password</label>
        <input
          type="password"
          className="border-[#ccc] w-[300px] mb-4 p-2 border-[1px] text-[#555]  rounded"
          placeholder="Current Password"
        />
        <label htmlFor=""> Confirm New Password</label>
        <input
          type="password"
          className="border-[#ccc] w-[300px] mb-4 p-2 border-[1px] text-[#555]  rounded"
          placeholder="Current Password"
        />
        <button className="px-6 text-white  w-[100px] capitalize rounded py-1  bg-[#3773cd]">
          submit
        </button>
      </div>
    </div>
  );
};

export default PrivateChangePassword;
