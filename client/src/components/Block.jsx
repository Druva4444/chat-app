import React from 'react'

export const Block = ({name}) => {
  return (
    <div className='flex pr-10 felx-row items-center  border border-white pt-1 pb-1' style={{backgroundColor:"#F2EED7 "}}>
     <div className="flex justify-center items-center w-16 h-16 rounded-full  border-2 border-gray-300 mr-4" style={{backgroundColor:"#798645"}}>
    <div className="text-white text-lg font-bold">{name[0].toUpperCase()}</div>
   
  </div>
   <div className="" style={{color:"#798645",fontWeight:"bold",fontSize:'20px'}}>{name}</div>
   </div>
   
  )
}
