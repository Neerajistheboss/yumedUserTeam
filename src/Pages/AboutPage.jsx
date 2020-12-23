import React, { useContext,useEffect } from 'react'
import { AuthContext } from '../context/auth-context'
import Doctor from '../Components/Doctor'
import Download from '../Components/Download'
import './About.css'
import Logo from '../images/Logo (2).png'

const AboutPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null
	useEffect(() =>{
        window.scrollTo(0,0)
    },[])


	return (
		<>
			<div className="p-2 justify-content-center align-items-center about" style={{ background: '#C4FFF8' }}>
				<h2 style={{ fontWeight: 'bold' }} >About Us</h2>
				<div className="pr-lg-5" style={{ fontSize: '1.3rem' }}>
					<p>
						We have been bridging the gap between thousands of people and their
						Doctors for almost 2 years now. We intend to create a diverse ecosystem
				connecting the people with any kind of health issue with their Health.{' '}
					</p>
					<p>
						The Health Care community also harness our platform to establish and
						increase their presence among the patients.
			</p>
					<p>
						Your Health Our Priority
				<br />
						<b>Care for loved ones</b><span> <img src={Logo} alt="heart" /> </span>
					</p>
				</div>
				{/* <div className="col-lg-12 col-md-12 col-12 pb-5">
					<h2 style={{ fontWeight: 'bold' }}>Contact Us</h2>
					<p ><i className="fa fa-phone mr-2" />
						<b>Phone: </b>085800242009 | 09472551360 | 887774494</p>
					<p ><i className="fa fa-envelope mr-2" />
						<b>Email: </b>info@yumedic.com</p>
					 <p >
						Your Health Our Priority
						<br />
						<b>Care for loved ones</b></p> 
				</div> */}
			</div >

			<Doctor />
			<Download />
		</>
	)
}
export default AboutPage
