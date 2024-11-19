import React from 'react'

function Submission({datas}) {
  return (
    <div>
       <div className="flex justify-between">
                  <h1 className="text-lg lg:text-xl font-bold text-gray-800">EEID Badge Photo Approvals</h1>
                  <h1 className="underline underline-offset-4 text-sky-800 font-bold">VIEW SUBMISSIONS</h1>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 mt-3">
                  <div className="flex justify-between font-bold">
                    <p className="text-gray-600">Total pending approval</p>
                    <p className="text-red-500">{datas.idBadgeSummary?.totalPending}</p>
                  </div>
                  <div className="flex justify-between mt-2 font-bold">
                    <p className="text-gray-600">Approved this month</p>
                    <p className="text-gray-600">{datas.idBadgeSummary?.totalApprovedInMonth}</p>
                  </div>
                  <div className="flex justify-between mt-2 font-bold">
                    <p className="text-gray-600">Rejected this month</p>
                    <p className="text-gray-600">{datas.idBadgeSummary?.totalRejectedInMonth}</p>
                  </div>
                  <div
                    className="mt-2 rounded-lg p-3"
                    style={{ backgroundColor: "rgba(233,244,248,1)" }}
                  >
                    <h1 className="font-bold text-gray-600">Latest Submission</h1>
                    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x mt-2 rounded-lg">
                      <div className="p-2 pl-5">{datas.idBadgeSummary?.latestSubmission?.userName}</div>
                      <div className="p-2 pl-5">{datas.idBadgeSummary?.latestSubmission?.updatedAt}</div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Submission
