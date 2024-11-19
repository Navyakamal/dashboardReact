import React from 'react'

function Stories({datas}) {
  return (
    <div>
          <div className="flex justify-between">
                    <h1 className="text-lg lg:text-xl font-bold text-gray-800">Stories</h1>
                    <h1 className="underline underline-offset-4 text-sky-800 font-bold">VIEW STORIES</h1>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 mt-3">
                    <div className="flex justify-between font-bold">
                      <p className="text-gray-600 ">Pending Approval</p>
                      <p className="text-red-500">{datas.storySummary?.totalPending}</p>
                    </div>
                    <div className="flex justify-between mt-2 font-bold">
                      <p className="text-gray-600 ">Total Stories</p>
                      <p className="text-gray-600">{datas.storySummary?.totalRecords}</p>
                    </div>
                    <div className="mt-2  rounded-lg p-3" style={{backgroundColor: "rgba(233,244,248,255)"}}>
                      <div className="font-bold text-gray-600">Latest Story</div>
                      <div className="bg-white p-3 text-justify mt-2 border-2 rounded-md">
                        <div>{datas.storySummary?.latestStory?.story}</div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Stories
