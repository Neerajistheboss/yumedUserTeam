import React, { useState } from 'react'
const Point=(props)=>{
   
    
    
    return (
        <div className='shadow rounded   activePoint' style={{width:'90%',backgroundColor:"#FFFFFF",margin:"auto",marginBottom:"3px",padding:"5px"}}>
            <div className='d-flex align-items-center justify-content-between' onClick={()=>props.onExpand(props.id)}>
            <h3 className='d-inline-block'>{props.hnp.name}</h3>
            {!(props.id==props.show) && <i class="fas fa-chevron-down"></i>}
            </div>
            
            {(props.id==props.show) && <ul>
                {props.hnp.phones.map((phone=><h5 className="d-flex"><span style={{width:"8rem"}}>{phone}</span><a href="tel:7485095106" className="ml-1 btn m-0 btn-dark">Call Now <i className="fa fa-phone" /></a></h5>))}
            </ul>}

        </div>
    )
}
export default Point