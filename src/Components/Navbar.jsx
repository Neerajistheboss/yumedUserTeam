import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { NavbarBrand, NavItem } from 'reactstrap'
import './Navbar.css'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
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
					<NavLink style={{ alignSelf: "baseline" }} className='navbar-brand' to='/' onClick={closeDrawer}>
						MyDoctor
					</NavLink>
					<button className='navbar-toggler m-0' onClick={openDrawer}>
						<span className='navbar-toggler-icon'></span>
					</button>

					<ul className='d-none d-md-flex list-unstyled m-0 ml-auto align-items-center'>
						<li>
							<NavItem className='mx-3' >
								<NavLink activeClassName="menu_active" exact to='/' style={{ fontWeight: 'bold', color: '#BD0F40' }}>
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
								<NavLink activeClassName="menu_active" to='/about' style={{ fontWeight: '', color: 'red' }}>
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