import React, { useContext ,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import Download from '../Components/Download'
import './Ambulance.css'
import WWP from '../Components/WWP'



const Ambulance = () => {
    const auth = useContext(AuthContext)
    auth.time = null

    useEffect(() =>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="justify-content-center align-items-center ambulance" style={{ background: '#e6fcfa' }}>
                <h1 className="text-center p-4" style={{ color: '#0B6760', background: '#e6fcfa' }}> Yu<span style={{ color: "#FF0000" }}>Ambulance </span></h1>
                
                <WWP />

                <div className='text-center feedback p-5'>
                    <NavLink to='/contact'>
                        <h4>Feedback/Report a Problem</h4>
                    </NavLink>
                </div>
            </div>

            <Download />

        </>
    )
}
export default Ambulance
