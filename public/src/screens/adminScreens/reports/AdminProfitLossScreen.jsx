import React from "react";

export default function AdminProfitLossScreen() {
  return (
    <div className="AdminProfitLossScreen p-5">
      <div className="profit_inner ">
        <h2>Profit Loss Report</h2>
      </div>
      <div className="flex ">
        <div className="profit_sub_head mt-5 flex flex-col">
          <label htmlFor="">Search By Client Name</label>
          <input
            type="text"
            placeholder="search clinet"
            className="border-[#ccc] border-2  px-1 w-[250px]"
          />
        </div>
        <div className="profit_sub_head mt-5 ml-10 flex flex-col">
          <label for="birthday">From</label>
          <input
            type="date"
            className="border-[#ccc] border-2  px-1 w-[250px]"
          />
        </div>
        <div className="profit_sub_head mt-5 ml-10 flex flex-col">
          <label for="birthday">To</label>
          <input
            type="date"
            className="border-[#ccc] border-2  px-1 w-[250px]"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border p-5 rounded-lg">
              <table className="min-w-full divide-y  divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                    >
                      User Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right  uppercase border-[#c8c7c7] border-[2px] bg-[#2c2929] text-white "
                    >
                      Exposure
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        sammm
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        sammm
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        sammm
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        sammm
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
  );
}
