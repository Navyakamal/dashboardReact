import React from 'react'

function Polls({datas}) {
  return (
    <div>
           <div className="flex justify-between">
                    <h1 className="text-lg lg:text-xl font-bold text-gray-800">Polls Result</h1>
                    <h1 className="underline underline-offset-4 text-sky-800 font-bold">VIEW ALL</h1>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 mt-2">
                    <div className="text-gray-600 font-bold">Topic : {datas.pollSummary?.latestPollTitle} <br />10AM - 2PM </div>
                    <div className="mt-2  rounded-lg p-3" style={{backgroundColor: "rgba(233,244,248,255)"}}>
                      <div className="font-bold text-gray-600">Total Polls : {datas.pollSummary?.totalInteractions}</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2   gap-4 p-5">
                        <div className=" bg-white text-center rounded-md p-3 border-2">
                          <div className="text-sky-900 font-bold">19 Users Polled</div>
                          <div>Yes,I'll definitily be there!!</div>
                        </div>
                        <div className=" bg-white text-center rounded-md p-3 border-2">
                          <div className="text-sky-900 font-bold">13 Users Polled</div>
                          <div>Oh no, I can't make it :-(</div>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Polls
