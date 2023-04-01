import React from "react";

export default function AdminAccountStatementScreen() {
  return (
    <div>
      <div className="admin_account_screen p-5">
        <h2>Account Statement</h2>
      </div>
      <div className="admin_inner_account  flex p-5 ">
        <div className="subdetails flex flex-col">
          <label>Account Type</label>
          <select
            name="cars"
            className="border-solid border-2 border-gray-400 p-1 rounded-sm w-[200px]"
          >
            <option value="volvo">All</option>
            <option value="saab">Balance Reports</option>
            <option value="mercedes">Games Report</option>
          </select>
        </div>
        <div
          className="
          ml-7
        flex flex-col"
        >
          <label>Account Type</label>
          <select
            name="cars"
            className="border-solid border-2 border-gray-400 p-1 rounded-sm w-[200px]"
          >
            <option value="volvo">All</option>
            <option value="saab">Balance Reports</option>
            <option value="mercedes">Games Report</option>
          </select>
        </div>

        <div className="flex flex-col ml-7">
          <span>Search By Client Name</span>
          <input
            type="text"
            className="border-solid border-2 border-gray-400 p-1 rounded-sm w-[200px]"
          />
        </div>
        <div className="flex flex-col ml-7">
          <label for="birthday">From</label>
          <input
            type="date"
            className="border-solid border-2 border-gray-400 p-1 rounded-sm w-[200px]"
            name="date"
          />
        </div>
        <div className="flex flex-col ml-7">
          <label for="birthday">To</label>
          <input
            type="date"
            className="border-solid border-2 border-gray-400 p-1 rounded-sm w-[200px]"
            name="date"
          />
        </div>
        <div className="flex ml-7 flex-col">
          <label htmlFor=""></label>
          <button className="border-solid border-2 border-gray-400 bg-[blue] px-[30px] py-[5px] rounded-sm text-white">
            load{" "}
          </button>
        </div>
      </div>
      <div className="admin_list_table">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        colspan="3"
                        className="px-6 py-3 text-xs font-bold text-left  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        User Name
                      </th>
                      <th
                        colspan="1"
                        // scope="col"
                        className="px-6 py-3 text-xs font-bold text-left  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Credit Referance
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Balance
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Client (P/L)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Exposure
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Available Balance
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        U St
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        B St
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Exposure Limit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Default %
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Account Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Casino Total
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pl-4 " colspan="3">
                        <div className="flex items-center h-5">0</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        1
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        0
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        0
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          className="text-green-500 hover:text-green-700"
                          href="#"
                        >
                          0
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a className="text-red-500 hover:text-red-700" href="#">
                          0
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
