import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import Doctor from '../Components/Doctor'
import Download from '../Components/Download'
import './ContactPage.css'

const ContactPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null


	return (
		<>

			<div className="container-fluid contact_div">
				<div className="row">

					<div className="col-lg-6 col-md-6 col-10 mx-auto">
						<h1 className=" text-dark mb-5 mt-5"> Contact Us </h1>
						{/* <form onSubmit={this.handleSubmit.bind(this)}> */}
						<form >

							{/* <div className="alert p-4">
								<strong name="alert_message"></strong>
							</div> */}

							<div className="mb-3">

								<label
									htmlFor="exampleFormControlInput1"
									className="form-label">
									Full Name:
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
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlTextarea1"
									className="form-label">
									Message:
                      </label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									name="msg"
									// value={this.state.msg}
									// onChange={this.handleChange.bind(this, 'msg')}
									placeholder="Type Message... "
									required
								>
								</textarea>
							</div>
							<div className="">
								<button className="btn btn-primary" type="submit">Send</button>
							</div>
						</form>
					</div>

					<div className="col-lg-4 col-md-4 col-10 mail">
						{/* <h2 className="or">OR</h2> */}
						<p className="text-center"><i className="fa fa-phone mr-2" />
							<b>Phone: </b>085800242009 | 09472551360 | 887774494</p>
						<p className="text-center"><i className="fa fa-envelope mr-2" />
							<b>Email: </b>info@yumedic.com</p>
						<p className="text-center">
							Your Health Our Priority
						<br />
							<b>Care for loved ones</b></p>
					</div>


				</div>
			</div>


			<Doctor />
			<Download />

		</>
	)
}
export default ContactPage
