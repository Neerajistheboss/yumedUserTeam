import React from 'react';
import logo from '../images/Skin and Hair.png'
import './DoctorReview.css'
import VsvPrasad from '../images/vsvPrasad.jpeg'
import NikhilDrolia from '../images/nikhil.jpeg'
import SkDas from '../images/skdas.jpeg'
const DoctorReview = () => {
    return (
        <>

            <div className=" container-fluid p-5 doctorReview">
                <h1 className="text-center font-weight-bold p-5">What our Doctors have to say?</h1>
                <div className="row d-flex justify-content-around">


                    <div class="card justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                        <img class="card-img-top" src={VsvPrasad} alt="Card image" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
                        <div class="card-body">
                            <h4 class="card-title text-center">Dr. VSV PRASAD </h4>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>MBBS,MD</p>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>B Polytechnic, Baramuri, Dhanbad, 828130</p>
                            <p class="card-text text-center">“Yumedic has greatly assisted in new patients for my clinic. I would say over 50 percent have had return visits and have referred others”</p>
                        </div>
                    </div>

                    <div class="card justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                        <img class="card-img-top" src={NikhilDrolia} alt="Card image" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
                        <div class="card-body">
                            <h4 class="card-title text-center">Dr Nikhil Drolia</h4>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>MBBS,MS Orthopaedics</p>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>B Polytechnic, Baramuri, Dhanbad, 828130</p>
                            <p class="card-text text-center">“It has been the one platform that I can measure the return on my investment with confidence. It has also made a significant difference in improving access to new patients.”</p>
                        </div>
                    </div>

                    <div class="card justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                        <img class="card-img-top" src={SkDas} alt="Card image" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
                        <div class="card-body">
                            <h4 class="card-title text-center">Dr. S.K.DAS </h4>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>GYNAECOLOGIST LAPROSCOPIC SURGEON</p>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>B Polytechnic, Baramuri, Dhanbad, 828130</p>
                            <p class="card-text text-center">“Yumedic has been very helpfull in increasing my reach and managing my appointments on daily basis”</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorReview