import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo1 from '../images/App Reprsentation.png'
import './GetOnBoardSlider.css'

const GetOnBoardSlider = () => {
    return (
        <>
            <div className="container getslider">
                <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover interval={3000} showArrows={true} showIndicators showThumbs={false}>
                    <div className="container bg-light">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-7 my-lg-5 mb-3 text-center">
                                <h1> Appointment Scheduling </h1>
                                <h4> We connect you to your Patients and help you Organize your appoitment Scheduling System. </h4>

                            </div>
                            <div className="col-12 col-md-12 col-lg-5 p-3">
                                <img src={logo1} alt="asset" />
                            </div>

                        </div>
                    </div>
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-7 my-lg-5 mb-3 text-center">
                                <h1> Appointment Scheduling </h1>
                                <h4> We connect you to your Patients and help you Organize your appoitment Scheduling System. </h4>

                            </div>

                            <div className="col-12 col-md-12 col-lg-5 p-3">
                                <img src={logo1} alt="asset" />
                            </div>

                        </div>
                    </div>
                    <div className="container bg-light">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-7 my-lg-5 mb-3 text-center">
                                <h1> Appointment Scheduling </h1>
                                <h4> We connect you to your Patients and help you Organize your appoitment Scheduling System. </h4>

                            </div>

                            <div className="col-12 col-md-12 col-lg-5 p-3">
                                <img src={logo1} alt="asset" />
                            </div>

                        </div>
                    </div>

                </Carousel>
            </div>

        </>
    );
}

export default GetOnBoardSlider;