import React from 'react'

function Referral({datas}) {
  return (
    <div>
             <div className="flex justify-between">
                  <h1 className="text-lg lg:text-xl font-bold text-gray-800">Referrals</h1>
                  <h1 className="underline underline-offset-4 text-sky-800 font-bold">VIEW REFERRALS</h1>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 mt-3">
                  <div className="flex justify-between">
                    <p className="text-gray-600 font-bold">Total new referrals</p>
                    <p className="text-gray-600 font-bold">{datas.referralSummary?.totalNewReferrals}</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-gray-600 font-bold">Niagara Region</p>
                    <p className="text-gray-600 font-bold">2</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-gray-600 font-bold">Scarborough</p>
                    <p className="text-gray-600 font-bold">1</p>
                  </div>
                  <div
                    className="mt-2 rounded-lg p-3"
                    style={{ backgroundColor: "rgba(233,244,248,1)" }}
                  >
                    <h1 className="font-bold text-gray-600">Latest Referral</h1>
                    <div className="bg-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x mt-2 rounded-lg">
                      <div className="p-2 pl-5">{datas.referralSummary?.latestReferral?.referredByName}</div>
                      <div className="p-2 pl-5">Niagara</div>
                      <div className="p-2 pl-5">HSW</div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Referral
