import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../context/auth-context'
import Doctor from '../Components/Doctor'
import Download from '../Components/Download'
import './ContactPage.css'
import axios from 'axios'

const ContactPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null
	const [messageSent,setMessageSent]=useState(0)

	//scrool to top on page load
	useEffect(() =>{
        window.scrollTo(0,0)
	},[])

	const submitMessage=()=>{
		const form=document.getElementById("form")
		form.addEventListener('submit',function(e){
			e.preventDefault()
		})
		const formData=Array.from(new Map(new FormData(form)))
		console.log(formData)
		let messageData={}
		messageData.fullname=formData[0][1]
		messageData.phone=formData[1][1]
		messageData.email=formData[2][1]
		messageData.msg=formData[3][1]
		console.log(messageData)

		axios.post(`${"http://localhost:5000"}/api/v1/messages`,messageData)
			  .then(response =>{
				  if(response.status===201)
				  {
						setMessageSent(1)
				  }
				  else setMessageSent(2)
			  })



	}
	let btnText
	let btnClass
	let bgColor

	if(messageSent==0) {
	 btnText="Send Message"
	 btnClass=""
	 bgColor="#009c8f"
	}


	if(messageSent==1) {
		btnText="Message Sent"
		btnClass="disabled btn-warning"
		bgColor="orange"
	}


	if(messageSent==2) {
		btnText="Something Went Wrong"
		btnClass=""
		bgColor="red"
	}

	return (
		<React.Fragment>

			<div className="container-fluid contact_div">
				<div className="row">

					<div className="col-lg-6 col-md-6 col-10 mx-auto">
						<h1 className=" text-dark mb-5 mt-5"> Contact Us </h1>
						{/* <form onSubmit={this.handleSubmit.bind(this)}> */}
						{/* <form method="POST" action={`${process.env.REACT_APP_YUVER_IP}/api/v1/messages`} > */}
							<form id="form" >
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
									type="text"
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
								<button className={`${btnClass} btn`} style={{backgroundColor:bgColor,color:"#FFF"}} onClick={submitMessage}>{btnText}</button>
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

		</React.Fragment>
	)
}
export default ContactPage
