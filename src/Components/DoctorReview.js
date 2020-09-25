import React from 'react';
import logo from '../images/Skin and Hair.png'
import './DoctorReview.css'

const DoctorReview = () => {
    return (
        <>

            <div className=" container-fluid p-5 doctorReview">
                <h1 className="text-center font-weight-bold p-5">What our Doctors have to say?</h1>
                <div className="row">
                    <div class="card justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                        <img class="card-img-top" src={logo} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title text-center">Dr Name Surname</h4>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Speciality</p>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Locality, City, Zip Code</p>
                            <p class="card-text text-center">“ Poop on floor and watch human clean up slap owner’s face at 5am until human fills food dish,
                             cat ass trophy mark territory, or meow and walk away for x so demand to have some. ”</p>
                        </div>
                    </div>

                    <div class="card justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                        <img class="card-img-top" src={logo} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title text-center">Dr Name Surname</h4>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Speciality</p>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Locality, City, Zip Code</p>
                            <p class="card-text text-center">“ Poop on floor and watch human clean up slap owner’s face at 5am until human fills food dish,
                             cat ass trophy mark territory, or meow and walk away for x so demand to have some. ”</p>
                        </div>
                    </div>

                    <div class="card justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                        <img class="card-img-top" src={logo} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title text-center">Dr Name Surname</h4>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Speciality</p>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Locality, City, Zip Code</p>
                            <p class="card-text text-center">“ Poop on floor and watch human clean up slap owner’s face at 5am until human fills food dish,
                             cat ass trophy mark territory, or meow and walk away for x so demand to have some. ”</p>
                        </div>
                    </div>

                    <div class="card justify-content-center align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                        <img class="card-img-top" src={logo} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title text-center">Dr Name Surname</h4>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Speciality</p>
                            <p className="text-center" style={{ color: "#001C4CC3" }}>Locality, City, Zip Code</p>
                            <p class="card-text text-center">“ Poop on floor and watch human clean up slap owner’s face at 5am until human fills food dish,
                             cat ass trophy mark territory, or meow and walk away for x so demand to have some. ”</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorReview