import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import { NavItem } from 'reactstrap'
import './Menu.css'

const Menu = (props) => {
	const auth = useContext(AuthContext)
	console.log(props)
	const menu = (
		<div id='navbarMenu' className='p-3 bg-light'>
			<ul className='navbar-nav ml-auto text-center'>
				{auth.isLoggedIn && (
					<NavItem>
						<NavLink to='/account' style={{ fontWeight: 'bold' }}>
							My Account
						</NavLink>
					</NavItem>
				)}
				<NavItem>
					<NavLink to='/contact' style={{ fontWeight: 'bold' }}>
						ContactUs
					</NavLink>
				</NavItem>
				{!auth.isLoggedIn && (
					<NavItem>
						<NavLink to='/login' style={{ fontWeight: 'bold' }}>
							Login
						</NavLink>
					</NavItem>
				)}
				{!auth.isLoggedIn && (
					<NavItem>
						<NavLink to='/register' style={{ fontWeight: 'bold' }}>
							SignUp
						</NavLink>
					</NavItem>
				)}
				{auth.isLoggedIn && (
					<NavItem>
						<NavLink to='/logout' style={{ fontWeight: 'bold' }}>
							Logout
						</NavLink>
					</NavItem>
				)}
			</ul>
		</div>
	)

	return ReactDOM.createPortal(menu, document.getElementById('menu'))
}

export default Menu
