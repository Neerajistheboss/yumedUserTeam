// import React, { useState, useContext } from 'react'
// import {
// 	Nav,
// 	NavItem,
// 	NavLink,
// 	NavbarBrand,
// 	Navbar,
// 	ButtonDropdown,
// 	DropdownMenu,
// 	DropdownToggle,
// 	DropdownItem,
// 	Button,
// 	Container,
// 	NavbarToggler,
// 	Collapse,
// } from 'reactstrap'
// import Path2 from '../images/headerPath.png'
// import { AuthContext } from '../context/auth-context'
// import Logo from '../images/Logo.png'

// const Header = () => {
// 	const auth = useContext(AuthContext)
// 	const [isOpen] = useState(false)

// 	const navbar = {
// 		paddingBottom: '20px',
// 		backgroundImage: `url(${Path2})`,
// 		backgroundSize: 'contain',
// 		backgroundPosition: 'right top',
// 		backgroundRepeat: 'no-repeat',
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 	}

// 	const [dropdownOpen, setOpen] = useState(false)
// 	const toggle = () => setOpen(!dropdownOpen)

// 	const [NavdropdownOpen, NavsetOpen] = useState(false)
// 	const Navtoggle = () => NavsetOpen(!NavdropdownOpen)

// 	return (
// 		<div style={navbar}>
// 			<Navbar light expand='md '>
// 				<NavbarBrand
// 					href='/'
// 					style={{ display: 'flex', justifyContent: 'space-between' }}>
// 					<img src={Logo} style={{ width: '50%' }} alt='Logo' />
// 				</NavbarBrand>
// 				<NavbarToggler onClick={Navtoggle} style={{ justifyItems: 'end' }} />
// 				<Collapse isOpen={isOpen} navbar>
// 					<Nav className='ml-auto' navbar style={{ justifyContent: 'end' }}>
// 						{auth.isLoggedIn && (
// 							<NavItem>
// 								<NavLink href='/account' style={{ fontWeight: 'bold' }}>
// 									My Account
// 								</NavLink>
// 							</NavItem>
// 						)}
// 						<NavItem>
// 							<NavLink href='/contact' style={{ fontWeight: 'bold' }}>
// 								ContactUs
// 							</NavLink>
// 						</NavItem>
// 						{!auth.isLoggedIn && (
// 							<NavItem>
// 								<NavLink href='/login' style={{ fontWeight: 'bold' }}>
// 									Login
// 								</NavLink>
// 							</NavItem>
// 						)}
// 						{!auth.isLoggedIn && (
// 							<NavItem>
// 								<NavLink href='/register' style={{ fontWeight: 'bold' }}>
// 									SignUp
// 								</NavLink>
// 							</NavItem>
// 						)}
// 						{auth.isLoggedIn && (
// 							<NavItem>
// 								<NavLink href='/logout' style={{ fontWeight: 'bold' }}>
// 									Logout
// 								</NavLink>
// 							</NavItem>
// 						)}
// 					</Nav>
// 				</Collapse>
// 			</Navbar>
// 		</div>
// 	)
// }

// export default Header

import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { NavbarBrand, NavItem } from 'reactstrap'
import './Navbar.css'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import Logo from '../images/Logo.png'
import Nodal from './Nodal'
const Navbar = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false)
	const auth = useContext(AuthContext)
	const openDrawer = () => {
		console.log('menu opening')
		setDrawerIsOpen(!drawerIsOpen)
	}

	const closeDrawer = () => {
		console.log('menu closing')
		setDrawerIsOpen(false)
	}

	const content = (
		<nav
			className='fixed navbar navbar-expand-md navbar-light bg-light p-1 d-flex align-items-center justify-content-between'
			style={{ height: '65px' }}>
			<NavLink className='navbar-brand' to='/'>
				<img src={Logo} style={{ width: '150px' }} alt='Logo' />
			</NavLink>
			<button className='navbar-toggler' onClick={openDrawer}>
				<span className='navbar-toggler-icon'></span>
			</button>

			<ul className='d-none d-md-flex list-unstyled m-0 align-items-center'>
				<li>
					{auth.isLoggedIn && (
						<NavItem className='mx-3'>
							<NavLink to='/account' style={{ fontWeight: 'bold' }}>
								My Account
							</NavLink>
						</NavItem>
					)}
				</li>
				<li>
					<NavItem className='mx-3'>
						<NavLink to='/contact' style={{ fontWeight: 'bold' }}>
							ContactUs
						</NavLink>
					</NavItem>
				</li>
				<li>
					{!auth.isLoggedIn && (
						<NavItem className='mx-3'>
							<NavLink to='/login' style={{ fontWeight: 'bold' }}>
								Login
							</NavLink>
						</NavItem>
					)}
				</li>
				<li>
					{!auth.isLoggedIn && (
						<NavItem className='mx-3'>
							<NavLink to='/register' style={{ fontWeight: 'bold' }}>
								SignUp
							</NavLink>
						</NavItem>
					)}
				</li>
				{auth.isLoggedIn && <Nodal />}
			</ul>

			{drawerIsOpen && <Menu onClick={openDrawer} drawer={openDrawer} />}
		</nav>
	)

	return ReactDOM.createPortal(content, document.getElementById('navbar'))
}

export default Navbar
