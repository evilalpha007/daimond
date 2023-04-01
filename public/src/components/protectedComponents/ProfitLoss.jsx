import React from 'react'

const ProfitLoss = () => {
  return (
    <div>
      <div className="profit_loss">
        <div className="profit_loss_inner  mt-1 mx-1 p-2 bg-[#0f2462] ">
          <h2 className="text-white text-2xl"> Profit Loss Reports</h2>
        </div>
        <div className="account_calendar p-2">
          <input
            type="date"
            className="border-[#ccc] p-2 border-[1px] text-[#555] mr-3 rounded"
            value="2000-05-05"
          />
          <input
            type="date"
            className="border-[#ccc] p-2 border-[1px] text-[#555]  mr-3 rounded"
            value="2000-05-05"
          />
          <select
            name="cars"
            className="w-[200px] border-[#ccc] p-2 border-[1px] text-[#555]  mr-3 rounded"
            id="cars"
          >
            <option value="volvo">All</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <button className="px-6 text-white capitalize rounded py-1  bg-[#3773cd]">
            submit
          </button>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Sr No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Credit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Debit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Balance
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Sports
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      {/*  <td className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                      
                                      
                                    </div>
  </td>*/}
                    </tr>
                    <tr>
                      <td className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <span className="mt-2"> No Data To Display</span>
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

export default ProfitLoss