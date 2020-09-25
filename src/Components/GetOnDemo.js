import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import Doctor from '../Components/Doctor'
import Download from '../Components/Download'
import './GetOnDemo.css'

const GetOnDemo = () => {
    const auth = useContext(AuthContext)
    auth.time = null


    return (
        <>

            <div className="container-fluid getDemo">
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-10 mx-auto">
                        <h1 className=" font-weight-bold text-dark mb-5 mt-5"> Get a YuMedic Demo </h1>
                        {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
                        <form >

                            <div className="mb-3">

                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label">
                                    Your Name:
                      </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    // value={this.state.fullname}
                                    // onChange={this.handleChange.bind(this, 'fullname')}
                                    placeholder="Enter Name"
                                    required
                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label">
                                    Your Speciality:
                    </label>
                                <select
                                    name='specialisation'
                                    // onChange={textChangeHandler}
                                    className='form-control'>
                                    <option value=''>Specialist</option>
                                    <option value='General Physician'>General Physician</option>
                                    <option value='Cardiology'>Cardiology</option>
                                    <option value='Child Specialist'>Child Specialist</option>
                                    <option value='General Surgeon'>General Surgeon</option>
                                    <option value='Dental'>Dental</option>
                                    <option value='Nephrology'>Nephrology</option>
                                    <option value='Gynaecologist'>Gynaecologist</option>
                                    <option value='Skin and Hair'>Skin and Hair</option>
                                    <option value='Bones and Joints'>Bones and Joints</option>
                                    <option value='Eye Specialist'>Eye Specialist</option>
                                </select>
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label">
                                    Email address:
                    </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    // value={this.state.email}
                                    // onChange={this.handleChange.bind(this, 'email')}
                                    placeholder="Enter Email "
                                    required
                                />
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label">
                                    Phone:
                    </label>
                                <input
                                    type="Number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    // value={this.state.phone}
                                    // onChange={this.handleChange.bind(this, 'phone')}
                                    placeholder="Enter Mobile Number"
                                />
                                <div className="justify-content-center align-items-center">
                                    <button className="btn btn-dark" type="submit">Get Started</button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        </>
    )
}
export default GetOnDemo
