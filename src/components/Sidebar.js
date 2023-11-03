import React, { useState } from 'react'
import { FaX, FaXmark } from "react-icons/fa6";
function Sidebar(props) {
  return (
    <>
    <div className={`w-[35vw] fixed right-0 top-0 bg-[#fafafa] h-full ${props.isHidden ? 'translate-x-0' : 'translate-x-full'} ease-linear duration-300 z-50`}>
        <div className="w-full flex justify-between">
          <p className="m-4">BUTTON <i>(0)</i></p>
          <button className="m-4" onClick={props.OnCloseHandler}><FaX /></button>
        </div>
        <hr  className="w-full h-[1.5px] bg-black"/>
        <h2 className="text-center mt-4">Your Cart is empty</h2>
    </div>
    </>
  )
}

export default Sidebar