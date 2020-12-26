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
import axios from 'axios'

const SearchOptions = () => {

	//setting doctor names
	const auth=useContext(AuthContext)
	const [search, setSearch] = useState("")
	const [clicked, setClicked] = useState(false)
	let [namesArray, setNamesArray] = useState(["ak singh","sk das"]);
        // 
        useEffect(() => {
            axios.get(`${process.env.REACT_APP_YUVER_IP}/api/v1/doctors/names`)
                .then(function(response) {
                    setNamesArray([...new Set(response.data.data.map(obj => obj.name))])
                }).catch(error => console.log(error))
		}, [])
		

		let medArray = namesArray.filter(name => name.toLowerCase().includes(search.toLowerCase()))

		const handleSearchChange = (event) => {
            setClicked(false)
            setSearch(event.target.value)
			

		}
		

		const medicineSearched = (event) => { 
			console.log("name selected")
			const name=event.target.innerText
			console.log(name)
            setSearch(name)
            auth.setDocName(name)
			setClicked(true)
			searchFilter.docName = event.target.innerText
			localStorage.setItem('filter', JSON.stringify(searchFilter))
			setSearchFields(name)
			setTimeout(function(){
				document.getElementById('searchBtn').click()	
			}, 500);
                
		}
		
		const setSearchFields=(name)=>{
			auth.setDocName(name)
			searchFilter.city=fields.city
			searchFilter.docName=name
			searchFilter.specialisation=fields.specialisation
			localStorage.setItem('filter', JSON.stringify(searchFilter))

		}


	let searchFilter = JSON.parse(localStorage.getItem('filter'))
	if (searchFilter == null) {
		searchFilter = { city: null, docName: null, specialisation: null }
	}
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
						<div className=' mb-md-1  col-12 col-sm-4 px-5 px-sm-1 text-danger' style={{color: '#008A80'}}>
							<input
								style={{margin:"3px auto",color: '#008A80'}}
								name='name'
								onChange = { handleSearchChange }
								value = { search }
								type='text'
								autocomplete="off"
								className='searchoption'
								placeholder='Search Doctor by Name'
								required
							/>
							 <ul style = {{ listStyleType: "none", padding: "0", backgroundColor: "white",color: "black"}}>
                         {search.length > 0 && !clicked && medArray.map(name => ( <li onClick = { medicineSearched } style = {{ padding: "3px" }}> { name } </li>))} 
                        </ul >
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
							<NavLink id="searchBtn" to='search' className='text-decoration-none searchoption  text-center d-inline-block pt-2' style={{backgroundColor:'#008a80',color:"white",fontSize:'20px',margin:"3px auto"}} onClick={()=>setSearchFields(search)}>
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
