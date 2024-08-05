import React, { useContext, useEffect } from 'react'
import Testimonials from '../Components/Carousel'
import Specialities from '../Components/Specialities'
import Hospitals from '../Components/Hospitals'
import SearchOptions from '../Components/SearchOptions'

import Doctor from '../Components/Doctor'
// import './App.css';
import Download from '../Components/Download'
import { Container, Row } from 'reactstrap'

import Bones from '../images/ortho.svg'
import Cardiology from '../images/cardio.svg'
import Child from '../images/chilld.svg'
import Dental from '../images/Dental.svg'
import Eye from '../images/ey.svg'
import Physician from '../images/general.svg'
import Gynae from '../images/gyno.svg'
import Neurology from '../images/Neuro.svg'
import Skin from '../images/dermatologist.svg'
import Surgeon from '../images/surgeonsvg.svg'
import Urologist from '../images/urologist.svg'
import Gastro from '../images/gas.svg'



import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { AuthContext } from '../context/auth-context'

import AsarfiImage from '../images/asarfi.png'
import PragatiImage from '../images/pragati.png'
import PatliputraImage from '../images/patliputra.png'



function HomePage(props) {
	const auth = useContext(AuthContext)

	//scrool to top on page load
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])


	console.log(auth)
	try {
		const token = props.match.params.token
		const uid = props.match.params.id

		localStorage.setItem('token', token)
		localStorage.setItem('uid', uid)
		auth.login(uid, token)
	} catch (error) {
		console.log(error)
	}

	useEffect(() => {
		auth.setValues({ ...auth.values, docId: null, city: null, hospitalId: null, specialisation: null, name: null, date: moment().format('MM/DD/YYYY'), time: null })
	}, [])

	let searchFilter = JSON.parse(localStorage.getItem("filter"))
	if (searchFilter == null)
		searchFilter = {}

	const setSpecialisation = (event) => {
		auth.setValueFunc("specialisation", event.target.name)
		auth.setValueFunc("hospitalId", null)
		auth.setDocName(null)
		searchFilter.hospitalId = null
		searchFilter.specialisation = event.target.name
		searchFilter.docName = null
		localStorage.setItem('filter', JSON.stringify(searchFilter))
	}

	const setHospital = (event) => {
		auth.setValueFunc("hospitalId", event.target.name)
		auth.setValueFunc("specialisation", null)
		auth.setDocName(null)
		searchFilter.hospitalId = event.target.id
		searchFilter.docName = null
		localStorage.setItem('filter', JSON.stringify(searchFilter))
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
		marginBottom: '34px',
	}

	return (
		<div>
			<SearchOptions />

			<Container>
				<h3 style={{ fontWeight: 'bold' }}>
					Search by Specialities
				</h3>
			</Container>
			<Container style={styleSpecialities}>
				<Row className='justify-content-center row-cols-6'>
					<div className='text-center' name='General Physician'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='General Physician'>
							<Specialities
								name='General Physician'
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
					<div className='text-center' name='Child Specialist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Child Specialist'>
							<Specialities
								name='Child Specialist'
								spe='Child Specialist'
								img={Child}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='General Surgeon'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='General Surgeon'>
							<Specialities
								name='General Surgeon'
								spe='General Surgeon'
								img={Surgeon}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Dental'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Dental'>
							<Specialities name='Dental' spe='Dental' img={Dental} />
						</NavLink>
					</div>
					<div className='text-center' name='Nephrology'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Nephrology'>
							<Specialities
								name='Nephrology'
								spe='Nephrology'
								img={Neurology}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Gynaecologist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Gynaecologist'>
							<Specialities
								name='Gynaecologist'
								spe='Gynaecologist'
								img={Gynae}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Skin and Hair'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Skin and Hair'>
							<Specialities
								name='Skin and Hair'
								spe='Skin and Hair'
								img={Skin}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Bones and Joints'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Bones and Joints'>
							<Specialities
								name='Bones and Joints'
								spe='Bones and Joints'
								img={Bones}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Eye Specialist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Eye Specialist'>
							<Specialities
								name='Eye Specialist'
								spe='Eye Specialist'
								img={Eye}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Urologist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Urologist'>
							<Specialities
								name='Urologist'
								spe='Urologist'
								img={Urologist}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Gastrologist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Gastrologist'>
							<Specialities
								name='Gastrologist'
								spe='Gastrologist'
								img={Gastro}
							/>
						</NavLink>
					</div>
				</Row>
			</Container>
			<br />
			<Container>
				<h3 style={{ fontWeight: 'bold' }}>
					Search by Hospitals
				</h3>
			</Container>
			<Container>
				<div style={styleHospitals} className='mt-5'>
					<div className='text-center' id='5f43f5a86e2fc1623cda5cf0'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setHospital}
							id='5f43f5a86e2fc1623cda5cf0'>
							<Hospitals
								id='5f43f5a86e2fc1623cda5cf0'
								name='Asarfi Hospital'
								img={AsarfiImage}
							/>
						</NavLink>
					</div>
					<div className='text-center' id='5f43f5a86e2fc1623cda5cf1'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setHospital}
							id='5f43f5a86e2fc1623cda5cf1'>
							<Hospitals
								id='5f43f5a86e2fc1623cda5cf1'
								name='PatliPutra Hospital'
								img={PatliputraImage}
							/>
						</NavLink>
					</div>
					<div className='text-center' id='5f43f5a86e2fc1623cda5cf2'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setHospital}
							id='5f43f5a86e2fc1623cda5cf2'>
							<Hospitals
								id='5f43f5a86e2fc1623cda5cf2'
								name='Pragati Hospital'
								img={PragatiImage}
							/>
						</NavLink>
					</div>

				</div>
			</Container>
			<Testimonials />
			<Doctor />
			<Download />
		</div>
	)
}

export default HomePage
