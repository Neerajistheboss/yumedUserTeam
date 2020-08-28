import { createContext } from 'react'
import moment from 'moment'
export const AuthContext = createContext({
	isLoggedIn: false,
	patientName: null,
	userId: null,
	referralId: null,
	name: null,
	token: null,
	location: null,
	specialisation: null,
	city: null,
	showNodal: false,
	date: moment().format('YYYY/MM/DD'),
	time: null,
	docName: null,
	docId: null,
	hospitalId: null,
	cost: 300,
	login: () => {},
	logout: () => {},
})
