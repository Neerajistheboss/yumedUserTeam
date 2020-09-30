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
import Logo from '../images/Logo (2).png'
import Logo2 from '../images/YuMedic.png'
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
		<>

			<div className="background">
				<nav
					className='navbar fixed-top navbar-expand-md navbar-light align-items-center '
					style={{ height: '65px' }}>
					<NavLink className='navbar-brand' to='/' onClick={closeDrawer}>
						<img src={Logo} alt='Logo' className="logo1" />
						<span> <img src={Logo2} alt='Logo' className="logo2" /></span>
					</NavLink>
					<button className='navbar-toggler' onClick={openDrawer}>
						<span className='navbar-toggler-icon'></span>
					</button>

					<ul className='d-none d-md-flex list-unstyled m-0 ml-auto align-items-center'>
						<li>
							<NavItem className='mx-3'>
								<NavLink activeClassName="menu_active" exact to='/' style={{ fontWeight: 'bold' }}>
									Home
						</NavLink>
							</NavItem>
						</li>
						<li>
							{auth.values.isLoggedIn && (
								<NavItem className='mx-3'>
									<NavLink activeClassName="menu_active" to='/account' style={{ fontWeight: 'bold' }}>
										My Account
							</NavLink>
								</NavItem>
							)}
						</li>
						<li>
							<NavItem className='mx-3'>
								<NavLink activeClassName="menu_active" to='/about' style={{ fontWeight: 'bold' }}>
									AboutUs
						</NavLink>
							</NavItem>
						</li>
						<li>
							<NavItem className='mx-3'>
								<NavLink activeClassName="menu_active" to='/contact' style={{ fontWeight: 'bold' }}>
									ContactUs
						</NavLink>
							</NavItem>
						</li>
						<li>
							{!auth.values.isLoggedIn && (
								<NavItem className='mx-3'>
									<NavLink activeClassName="menu_active" to='/login' style={{ fontWeight: 'bold' }}>
										Login
							</NavLink>
								</NavItem>
							)}
						</li>
						<li>
							{!auth.values.isLoggedIn && (
								<NavItem className='mx-3 text-dark'>
									<NavLink activeClassName="menu_active" to='/register' style={{ fontWeight: 'bold' }}>
										SignUp
							</NavLink>
								</NavItem>
							)}
						</li>

						<li>
							<NavItem className='mx-3'>
								<NavLink activeClassName="menu_active" to='/ambulance' style={{ fontWeight: 'bold' }}>
									Emergency
						</NavLink>
							</NavItem>
						</li>

						{auth.values.isLoggedIn && <Nodal />}
					</ul>

					{drawerIsOpen && <Menu onLinkClick={closeDrawer} drawer={openDrawer} />}
				</nav>
			</div>
		</>
	)

	return ReactDOM.createPortal(content, document.getElementById('navbar'))
}

export default Navbar
