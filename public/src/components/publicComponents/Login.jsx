import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handelLogin } from "../../store/features/auth/authSlice";

export default function Login({ showModal, setShowModal }) {
  const { hidePublicRoutes, login } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div className="justify-center login_container items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
        <span
          className=" text-black cross_section text-2xl block outline-none focus:outline-none"
          onClick={() => setShowModal(false)}
        >
          <span className="material-symbols-rounded">close</span>
        </span>
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className=" login_content border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
            <h2 className="text-3xl font-semibold text-center p-10">Login</h2>

            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-col">
              <input type="text" placeholder="username" className="username" />
              <input
                type="password"
                placeholder="password"
                className="password username mt-5"
              />
            </div>
            {/*footer*/}
            <div className="flex flex-col items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-white-500  bg-green-600 font-bold w-[300px] rounded-2xl px-6 py-2 textlg outline-none focus:outline-none  mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Log in
              </button>
              <button
                className="text-white-500 mt-2  bg-green-600 font-bold w-[300px] rounded-2xl px-6 py-2 textlg outline-none focus:outline-none  mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  dispatch(
                    handelLogin({ login: true, hidePublicRoutes: true })
                  );
                  setShowModal(false);
                }}
              >
                Log in with demo ID
              </button>

              <button
                className=" text-yellow-300 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                {" "}
                <span className="mr-5 text-violet-500">
                  Dont have an account
                </span>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-55 fixed inset-0 z-40 bg-[rgba(29,34,47,.8)]"></div>
    </>
  );
}
