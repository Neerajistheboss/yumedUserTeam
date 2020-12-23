import React, { useState, useContext, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
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
	let searchFilter = JSON.parse(localStorage.getItem('filter'))
	if (searchFilter == null) {
		searchFilter = { city: null, docName: null, specialisation: null }
	}
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

		const name = event.target.name
		auth.values[name] = value
		searchFilter[name] = value
		localStorage.setItem('filter', JSON.stringify(searchFilter))
	}

	return (
		
		<div className='section'>
			
			<div className="searchDoctor container my-5">
				<h3 style={{color: '#008A80',fontWeight: 'bold' ,fontsize:'2.5rem !important'}}> Search for Doctors </h3>
			
					<div class='form form-inline'>
					<div class='row justify-content-center w-100' id="form row" >
						<div className=' mb-md-1  col-12 col-sm-4 px-5 px-sm-1'>
							<input
								style={{margin:"3px auto"}}
								name='name'
								onChange={textChangeHandler}
								type='text'
								className='searchoption'
								placeholder='Type Something'
								required
							/>
						</div>
						<div className=' mb-md-1 col-12 col-sm-4 px-5 px-sm-1'>
							<select 
							 	style={{margin:"3px auto"}}
								name='specialisation'
								onChange={textChangeHandler}
								className='searchoption'>
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
						</div>
						<div className=' col-5 col-sm-4 col-md-2' >
							<NavLink to='search' className='text-decoration-none searchoption  text-center d-inline-block pt-2' style={{backgroundColor:'#008a80',color:"white",fontSize:'20px',margin:"3px auto"}}>
								<SearchIcon className='d-none d-md-inline-block' style={{ color: 'white', fontSize: '25px' }} />
								Search
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchOptions
