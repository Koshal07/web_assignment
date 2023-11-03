import React, { useState } from 'react'
import {RxDotFilled} from 'react-icons/rx';
import AccordionItem from './AccordionItem';
function Product(props) {


  const [currInd , setcurrInd] = useState(0);
  const [open , setOpen] = useState(false);

  const toggle = (index)=>{
    if(open === index){
      return setOpen(null);
    }
    setOpen(index);
  }
  const setCurrentIndex = (index)=>{
    setcurrInd(index);
  }
  const slides = [
    "https://decemdrinks.com/cdn/shop/products/Aperitif_Serve_1024x1024.png?v=1659602669",

    "https://decemdrinks.com/cdn/shop/products/Aperitif_Front_1024x1024.png?v=1659602669",
    
    "https://decemdrinks.com/cdn/shop/products/Aperitif_Back_1024x1024.png?v=1659602669"
  ]

  const Accordion = [
    {title : "DESCRIPTION",
    desc : "Using a special combination of botanicals, from the hedgerow to the vegetable patch. Chosen to tickle the taste buds with interesting hints of approachable bitterness, but cleverly rounded off with the tart strawberry and sweet grape to create the most adult and uniquely moreish of aperitifs. We macerate the botanicals for 2 days to extract maximum flavour, before carefully blending with the real fruit juices to create this distinctly delicious flavour."
    },
    {title : "TASTE",
    desc : "Complex woody and herbal, full bodied guelder rose with slight floral characters. Sweet grape and subtle strawberry."
    },
    {title : "SERVE",
    desc : "Simply serve 50ml chilled over ice with 100ml English Sparkling Wine and a dash of premium soda. 10% ABV."
    }

  ]
  return (
    <div className="container h-screen flex">
    {/* Carousel */}
    <div className={`w-1/2 h-full flex-column justify-center ${props.isHidden ? 'opacity-40' : ''}`} style={{"alignItems" : "center"}}>
    <div className="w-[90%] h-[90%] mt-12 p-5 flex justify-end" style={{"alignItems" : "center"}}>
    <div className="w-[60%] h-[100%] border flex justify-center mt-10" style={{"alignItems" : "center" , borderRadius : "50%" , border : "1px solid #000"}}>
    <div className="w-[50%] h-[70%] bg-contain duration-500" style={{backgroundImage : `url(${slides[currInd]})` , backgroundRepeat : "no-repeat"}}>

    </div>
    </div>
    </div>
    <div className="flex justify-center translate-x-[95px]">
    {slides.map((slide,index)=>(
    <div key={index} onClick={()=> setCurrentIndex(index)} className="text-2xl cursor-pointer"><RxDotFilled /></div>
     ))}
     </div>

     {/* <button onClick={nextSlide}>NEXT</button>
     <button onClick={prevSlide}>PREV</button> */}

     </div>

     {/* Text */}
     <div className={`w-1/2 h-full p-4`}>
     <div className="w-[80%] h-[95%] mt-8 p-4 flex justify-center items-center">
     <div className={`w-[80%] h-[70%] ${props.isHidden ? 'opacity-40' : ''}`}>
     <ul className="flex w-full justify-between">
  
      <li className="hover:text-[#2455f6] transition-all duration-300 cursor-pointer">LONDON DRY</li>
      <li className="hover:text-[#2455f6] transition-all duration-300 cursor-pointer">SPICED BLEND</li>
      
      <li className="font-bold hover:text-[#2455f6] transition-all duration-300 cursor-pointer">
        <u>APERTIF</u> 
      </li>
      <li className="hover:text-[#2455f6] transition-all duration-300 cursor-pointer">TRIO</li>
     </ul>
     <hr className="w-[100%] h-[1.5px] bg-black mt-[14px]"/>

     <div className="">
      <h1 className="text-3xl mt-4">
       <span className="font-semibold">APERITIF</span> 
        <br /> <i>made with</i> Heritage Botanicals
      </h1>
      
      <div className="w-[100%] flex justify-between mt-6">
        <h3>
        Macerated <i>in</i> England
        </h3>
        <h3 className="font-medium">
          10%Vol / 700ml
        </h3>
      </div>

      <button className="w-full bg-black text-[#fff] p-[10px] text-[22px] hover:text-[#fff] hover:bg-[#2455f6] transition-all duration-300 delay-50 ease-linear mt-4" style={{borderRadius : '40px'}}>£29.95 — Add to Bag</button>
      <p className="text-center text-[#2455f6] font-semibold mt-4">FREE UK DELIVERY</p>
      <hr className="w-[100%] h-[2px] bg-black mt-[14px]"/>
      {Accordion.map((accord , index)=>(
        <AccordionItem key={index} open={index === open} toggle={()=>{toggle(index)}} title={accord.title} desc={accord.desc}/>
      ))}

     </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Product