import React, { useEffect, useState } from 'react'
import { getData } from '../../services/dashboardService/getData'
import Submission from '../../components/dashboard/Submission'
import Referral from '../../components/dashboard/Referral'
import Polls from '../../components/dashboard/Polls'
import Stories from '../../components/dashboard/Stories'
import Wellness from '../../components/dashboard/Wellness'

function Landing() {

    const [data,setData]=useState([])

    const fetchData=async()=>{
            const result=await getData()
            setData(result)        
    }
    console.log(data);
    
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-2 p-5 lg:p-10 lg:border-e-2 border-b-2 items-center">
        <button className="p-2 ps-3 pe-14 lg:mt-12 bg-cyan-700 text-white font-bold rounded-md text-left">
          <i className="fa-solid fa-bars"></i> Dashboard
        </button>
      </div>
      <div className="col-span-10">
        <div className="p-4 flex justify-end items-center gap-2 border-b-2">
          <button className="bg-gray-200 rounded-full w-9 h-9">
            <i className="fa-regular fa-user"></i>
          </button>
          <p>Mary J.</p>
        </div>
        <div style={{ backgroundColor: "rgba(248, 252, 253, 1)" }}>
          <div className="p-5">
            <h3 className="text-xl lg:text-2xl font-bold text-sky-800">Dashboard</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-7 my-4">
                <div className="col-span-1">
                <Submission datas={data}></Submission>
                </div>
                <div className="col-span-1">
                    <Referral  datas={data}></Referral>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-7 gap-4 my-4">
                <div className="col-span-1">
                    <Polls  datas={data}></Polls>
                </div>
                <div className="col-span-1">
                    <Stories  datas={data}></Stories>
                </div>
              </div>
              <div className="grid grid-cols-12 my-4">
                <div className="col-span-12">
                    <Wellness  datas={data}></Wellness>
                </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Landing
