import React from "react";

export default function AdminListOfClientsScreen() {
  return (
    <div className="admin-list_main">
      <div className="admin-list-of-clients  flex justify-between p-[20px]">
        <div className="admin_listclient">Account List</div>
        <button
          type="button"
          className="bg-[blue] px-[10px] py-[5px] rounded text-white"
        >
          Add Account
        </button>
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
