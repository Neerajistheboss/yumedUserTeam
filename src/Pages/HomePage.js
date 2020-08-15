import React, { useContext, useEffect } from 'react'
import Testimonials from '../Components/Carousel'
import Specialities from '../Components/Specialities'
import Hospitals from '../Components/Hospitals'
import SearchOptions from '../Components/SearchOptions'

import Doctor from '../Components/Doctor'
// import './App.css';
import Download from '../Components/Download'
import { Container, Row } from 'reactstrap'

import Bones from '../images/Bones and Joints.png'
import Cardiology from '../images/Cardilogy.png'
import Child from '../images/Child Specialist.png'
import Dental from '../images/Dental.png'
import Eye from '../images/Eye Specialist.png'
import Physician from '../images/General Physician.png'
import Gynae from '../images/Gynaecologist.png'
import Neurology from '../images/Neurology.png'
import Skin from '../images/Skin and Hair.png'
import Surgeon from '../images/Surgeon.png'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../context/auth-context'

function HomePage(props) {
	const auth = useContext(AuthContext)
	try {
		const token = props.match.params.token
		const uid = props.match.params.id

		localStorage.setItem('token', token)
		localStorage.setItem('uid', uid)
		auth.login(uid, token)
	} catch (error) {
		console.log(error)
	}

	const setSpecialisation = (event) => {
		auth.specialisation = event.target.name
		auth.hospitalId = null
		console.log(auth.specialisation)
	}

	const setHospital = (event) => {
		auth.hospitalId = event.target.id
		console.log(auth.hospitalId)
		auth.specialisation = null
	}

	const styleSpecialities = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginBottom: '34px',
		textAlign: 'center',
	}

	const styleHospitals = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginBottom: '34px',
	}

	return (
		<div>
			<SearchOptions />

			<Container>
				<h3 style={{ color: 'rgb(71,123,117)', fontWeight: 'bold' }}>
					Search by Specialities
				</h3>
			</Container>
			<br />
			<Container style={styleSpecialities}>
				<Row className='justify-content-center'>
					<div className='text-center' name='GeneralPhysician'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='GeneralPhysician'>
							<Specialities
								name='GeneralPhysician'
								spe='General Physician'
								img={Physician}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Cardiology'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Cardiology'>
							<Specialities
								name='Cardiology'
								spe='Cardiology'
								img={Cardiology}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='ChildSpecialist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='ChildSpecialist'>
							<Specialities
								name='ChildSpecialist'
								spe='Child Specialist'
								img={Child}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Surgeon'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Surgeon'>
							<Specialities name='Surgeon' spe='Surgeon' img={Surgeon} />
						</NavLink>
					</div>
					<div className='text-center' name='Dentist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Dentist'>
							<Specialities name='Dentist' spe='Dental' img={Dental} />
						</NavLink>
					</div>
					<div className='text-center' name='Neurologist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Neurologist'>
							<Specialities
								name='Neurologist'
								spe='Neurologist'
								img={Neurology}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Gynocologist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Gynocologist'>
							<Specialities
								name='Gynocologist'
								spe='Gynocologist'
								img={Gynae}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='SkinAndHair'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='SkinAndHair'>
							<Specialities name='SkinAndHair' spe='Skin and Hair' img={Skin} />
						</NavLink>
					</div>
					<div className='text-center' name='Orthopedic'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Orthopedic'>
							<Specialities
								name='Orthopedic'
								spe='Bones and Joints'
								img={Bones}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Eye'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Eye'>
							<Specialities name='Eye' spe='Eye Specialist' img={Eye} />
						</NavLink>
					</div>
				</Row>
			</Container>
			<br />
			<Container>
				<h3 style={{ color: 'rgb(71,123,117)', fontWeight: 'bold' }}>
					Search by Hospitals
				</h3>
			</Container>
			<div style={styleHospitals}>
				<div className='text-center' name=''>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						id='5ed4d26c7004f434b8f8d34e'>
						<Hospitals
							id='5ed4d26c7004f434b8f8d34e'
							name='Asarfi Hospital'
							img={Physician}
						/>
					</NavLink>
				</div>
				<div className='text-center' name=''>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						name=''>
						<Hospitals name='PatliPutra Hospital' img={Skin} />
					</NavLink>
				</div>
				<div className='text-center' name=''>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						name=''>
						<Hospitals name='Medica SuperSpeciality Hospital' img={Gynae} />
					</NavLink>
				</div>
				<div className='text-center' name=''>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						name=''>
						<Hospitals name='Alom Hospital' img={Bones} />
					</NavLink>
				</div>
				<div className='text-center' name=''>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						name=''>
						<Hospitals name='Contacare Eyes Hospital' img={Neurology} />
					</NavLink>
				</div>
			</div>
			<Testimonials />
			<Doctor />
			<Download />
		</div>
	)
}

export default HomePage
