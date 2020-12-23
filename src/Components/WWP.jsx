import React, { useState } from 'react'
import Point from './Point'
const WWP =()=>{
   const [show,setShow]=useState(-1)
   const onExpand=(id)=>{
      setShow(id)
   }

   const hospNameAndNumber=[
                            {
                                name:"Asarfi Hospital",
                                phones:["6202719829","7485095106"]
                            },
                            {
                                name:"Patliputra Hospital",
                                phones:["12378924902","0928745893"]    
                            }
   ]

   return (
    <div className="col-12 col-md -6 ml-0 ml-md-5">
    
{   
    hospNameAndNumber.map((hsp,index)=>(
        <Point  hnp={hsp} show={show} onExpand={onExpand} id={index}/>
    ))
}

    
    
    </div>
   )
}
export default WWP