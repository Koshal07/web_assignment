import React , {useState} from 'react'
import { FaXmark } from "react-icons/fa6";
function Navbar(props) {
  const [isHidden , setisHidden] = useState(false);
  let quantity = 0;
  return (
    <>
    <div className="fixed top-0 container">
    <div className={`w-full h-8 bg-[#2455f6] ${isHidden ? "hidden" : "flex"} justify-center`}>
        <p className="text-[#ffffff] mt-0.5">Use code <span className="font-bold">DECEM10</span> for <span className="font-bold">£10 OFF</span> your first order</p>
        <button onClick={()=> {setisHidden(!isHidden)}} className="absolute right-2 top-2"><FaXmark color='white'/></button>
    </div>
    <div className="container  h-14 flex ">
    <div className="w-1/3  flex align-middle">
    <div className='group'>
    <p className='text-xl m-3 ml-6 cursor-pointer'>SHOP</p>
    <div className="absolute top-18 w-full h-[50vh]  bg-[#fafafa] hidden group-hover:block hover:block">
     <hr className="w-full h-[1.5px] bg-black"/>
    <div className="w-full h-1/4 ">
      <h1 className="text-[40px] p-[10px] hover:text-[#2455f6] transition-all duration-200 cursor-pointer ">LONDON DRY <i>made with </i>  British Gin</h1>
      <img src="" alt="" />
    </div>
    <hr className="w-full h-[1.5px] bg-black"/>
    <div className="w-full h-1/4">
     <h1 className="text-[40px] p-[10px] hover:text-[#2455f6] transition-all duration-200 cursor-pointer">SPICED BLEND <i>made with</i>  Caribbean Rum</h1>
    </div>
    <hr className="w-full h-[1.5px] bg-black"/>
    <div className="w-full h-1/4 ">
    <h1 className="text-[40px] p-[10px] hover:text-[#2455f6] transition-all duration-200 cursor-pointer">APERITIF <i>made with</i>  Heritage Botanicals </h1>
    </div>
    <hr className="w-full h-[1.5px] bg-black"/>
    <div className="w-full h-1/4 ">
    <h1 className="text-[40px] p-[10px] hover:text-[#2455f6] transition-all duration-200 cursor-pointer">TRIO London Dry, Spiced Blend & Aperitif</h1>
    </div>
    <hr className="w-full h-[1.9px] bg-black"/>
    </div>
    </div>
    <p className="text-xl m-3">STORY</p>
    </div>
    <div className="w-1/3  text-center">
        <h1 className="text-3xl mt-2">DECEM<sup className="text-[0.5rem] top-[-15px]">10</sup></h1>
    </div>
    <div className="w-1/3  flex justify-end">
        <div className="m-3 flex">
        <button onClick={props.onClickBasketHandler}>BASKET <span className='italic'>({quantity})</span></button>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar