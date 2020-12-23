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
					<NavLink style={{alignSelf:"baseline"}} className='navbar-brand' to='/' onClick={closeDrawer}>
						<img src={Logo} alt='Logo' className="logo1" />
						<span> <img src={Logo2} alt='Logo' className="logo2" /></span>
					</NavLink>
					<button  className='navbar-toggler m-0' onClick={openDrawer}>
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
							<NavItem className='mx-3'>
								<NavLink activeClassName="menu_active" to='/team' style={{ fontWeight: 'bold' }}>
									Our Team
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