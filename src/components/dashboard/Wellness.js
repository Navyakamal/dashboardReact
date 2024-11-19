import React from 'react'

function Wellness({datas}) {
  return (
    <div>
           <div className="flex justify-between">
                    <h1 className="text-lg lg:text-xl font-bold text-gray-800">
                        Latest 5 Wellness Notes
                    </h1>
                    <h1 className="underline underline-offset-4 text-sky-800 font-bold">
                        VIEW ALL WELLNESS NOTES
                    </h1>
                    </div>
                    <div className="mt-3 overflow-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300 text-left">
                        <thead>
                        <tr className="text-gray-700">
                            <th className="px-4 py-1 border-r border-b border-gray-300 w-32 whitespace-nowrap">
                            CVID
                            </th>
                            <th className="px-4 py-1 border-r border-b border-gray-300 w-52 whitespace-nowrap">
                            Client Name
                            </th>
                            <th className="px-4 py-1 border-r border-b border-gray-300 w-52 whitespace-nowrap">
                            Employee Name
                            </th>
                            <th className="px-4 py-1 border-r border-b border-gray-300 w-40 whitespace-nowrap">
                            Visit Date
                            </th>
                            <th className="px-4 py-1 border-r border-b border-gray-300 w-30 whitespace-nowrap">
                            Branch
                            </th>
                            <th className="px-4 py-1 border-b border-gray-300 w-50 whitespace-nowrap">
                            Wellness Note
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            CVID-1432
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            {datas.latestWellnessNoteSummary?.[0]?.clientName}
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            {datas.latestWellnessNoteSummary?.[0]?.employeeName}
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            {datas.latestWellnessNoteSummary?.[0]?.visitDate}
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            {datas.latestWellnessNoteSummary?.[0]?.branch}
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            {datas.latestWellnessNoteSummary?.[0]?.wellnessNote}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            CVID-1332
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            Norma Okuneva
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            Cleta Douglas
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            OCT 23, 2024
                            </td>
                            <td className="px-4 py-1 border-b border-r border-gray-300">
                            Halifax
                            </td>
                            <td className="px-4 py-1 border-b border-r hidden lg:table-cell">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
    </div>
  )
}

export default Wellness
