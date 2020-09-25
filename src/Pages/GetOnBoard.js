import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import './GetOnBoard.css'
import logo1 from '../images/girl.png'
import logo2 from '../images/photo.png'
import GetOnBoardSlider from '../Components/GetOnBoardSlider'
import DoctorReview from '../Components/DoctorReview'
import GetOnDemo from '../Components/GetOnDemo'

const GetOnBoard = () => {
    const auth = useContext(AuthContext)
    auth.time = null


    return (
        <>

            <div className="getonboard " style={{ background: '#fff' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-5 p-2">
                            <img src={logo1} alt="asset" />
                        </div>

                        <div className="col-12 col-md-12 col-lg-7 my-lg-5 p-2 text-center">
                            <h1> Get OnBoard With Us </h1>
                            <h4> YuMedic have helped thousands of doctors increase there reach among lakhs of people. </h4>
                            <button className="btn btn-dark"> Get OnBoard </button>
                        </div>
                    </div>
                </div>

                <div className="getonslider">
                    <h1 className="text-center font-weight-bold"> What is YuMedic? </h1>
                    <GetOnBoardSlider />
                </div>
            </div>
            <div className="ndoctor">
                <img src={logo2} alt="image" />
            </div>

            <DoctorReview />
            <GetOnDemo />

        </>
    )
}
export default GetOnBoard
