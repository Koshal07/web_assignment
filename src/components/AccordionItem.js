import React from 'react'
import {Collapse} from 'react-collapse';
import {AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai';
function AccordionItem({title,desc,open,toggle}) {
  return (
    <div className="">
        <div className='mt-4 flex justify-between items-center cursor-pointer' onClick={toggle}>
        <p className="text-[14px] font-semibold">{title}</p>
        <div className="text-[20px]">
            {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
        </div>
        <Collapse isOpened={open}>
        <div className="mt-4">
         <p style={{lineHeight : '24px'}}>{desc}</p>
        </div>
        </Collapse>
        <hr className="w-[100%] h-[1.5px] bg-black mt-[14px]"/>
    </div>
   
  )
}

export default AccordionItem