import React, { useState, useContext, useEffect } from 'react'
import {
	Nav,
	NavItem,
	NavbarBrand,
	Navbar,
	ButtonDropdown,
	DropdownMenu,
	DropdownToggle,
	DropdownItem,
	Button,
	Container,
	NavbarToggler,
	Collapse,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import './SearchOptions.css'

const SearchOptions = () => {
	const auth = useContext(AuthContext)
	const [isOpen] = useState(false)
	const [dropdownOpen, setOpen] = useState(false)
	const toggle = () => setOpen(!dropdownOpen)

	const [fields, setFields] = useState({
		city: '',
		docName: '',
		specialisation: '',
	})
	const textChangeHandler = (event) => {
		const value = event.target.value
		setFields({
			...fields,
			[event.target.name]: value,
		})
		// auth.city = fields.city
		// auth.docName = fields.docName
		// auth.specialisation = fields.specialisation

		auth[event.target.name] = value
	}

	return (
		// <Container>
		//         <h2 style={{ color: 'rgb(71,123,117)', fontWeight: 'bold' }}>Search For Doctors</h2>
		//         <input type='text' placeholder='Type Something' style={{ width: '50%' }} />
		//         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
		//             <DropdownToggle caret color='success' style={{ marginLeft: '40px' }}>
		//                 Specialities
		//             </DropdownToggle>
		//             <DropdownMenu>
		//                 <DropdownItem>Surgeon</DropdownItem>
		//                 <DropdownItem>Cardiologist</DropdownItem>
		//                 <DropdownItem>Neurologist</DropdownItem>
		//                 <DropdownItem>Orthopedics</DropdownItem>
		//                 <DropdownItem>Radiologist</DropdownItem>
		//             </DropdownMenu>
		//         </ButtonDropdown>
		//         <Button color="primary">Search</Button>
		//     </Container>

		<div class='section'>
			<div></div>
			<div class='form-container jumbotron  '>
				<div class='row align-items-center justify-content-center'>
					<div class=' mb-1 searchLocName'>
						<select
							name='city'
							onChange={textChangeHandler}
							class='form-control form-control-lg'>
							<option> Location </option>
							<option> Ranchi </option>
							<option> Dhanbad </option>
							<option> Jamshedpur </option>
							<option> Bokaro </option>
							<option> Deogarh </option>
							<option> Ramgarh </option>
							<option> Giridih </option>
							<option> Hazaribagh </option>
						</select>
					</div>
					<div className=' mb-1 searchLocName'>
						<input
							name='name'
							onChange={textChangeHandler}
							type='text'
							class='form-control form-control-lg'
							placeholder='Search Doctor,Clinic,Hospital...'
						/>
					</div>
					<div className=' mb-1 searchSpe'>
						<select
							name='specialisation'
							onChange={textChangeHandler}
							class='form-control form-control-lg'>
							<option> Specialist </option> <option> Medicine </option>
							<option> option </option> <option> option </option>
							<option> option </option>
						</select>
					</div>
					<div className='mb-1 searchbtn  btn-info form-control-lg '>
						<NavLink to='search' className='text-white text-decoration-none'>
							Search
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchOptions
