import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import Download from '../Components/Download'
import './Ambulance.css'



const Ambulance = () => {
    const auth = useContext(AuthContext)
    auth.time = null


    return (
        <>
            <div className="justify-content-center align-items-center ambulance" style={{ background: '#F5BCBA' }}>
                <h1 className="text-center p-4" style={{ color: '#0B6760', background: '#FFF050' }}> Yu<span style={{ color: "#FF0000" }}>Ambulance </span></h1>
                <div className="container my-5">
                    <h2 className="p-2"> Asarfi Hospital </h2>
                    <h5> Ambulance 1 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                    <h5> Ambulance 2 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                    <h5> Ambulance 3 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                </div>
                <div className="container my-5">
                    <h2 className="p-2"> Patliputra Hospital </h2>
                    <h5> Ambulance 1 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                    <h5> Ambulance 2 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                    <h5> Ambulance 3 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                </div>
                <div className="container my-5">
                    <h2 className="p-2"> Avinash Hospital </h2>
                    <h5> Ambulance 1 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                    <h5> Ambulance 2 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                    <h5> Ambulance 3 <button className="ml-5 btn btn-dark"><i className="fa fa-phone" /></button> </h5>
                </div>

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
