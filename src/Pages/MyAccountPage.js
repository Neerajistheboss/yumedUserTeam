import React, { useEffect, useContext, useState } from 'react'
import Download from '../Components/Download'
import Referral from '../Components/Referral'
import AppointmentGroup from '../Components/AppointmentGroup'
import axios from 'axios'
import { AuthContext } from '../context/auth-context'
const MyAccountPage = () => {
	const auth = useContext(AuthContext)
	const [refId, setRefId] = useState(auth.referralId)
	useEffect(() => {
		axios
			.get(`http://13.233.58.33:5000/api/v1/users/${auth.userId}`)
			.then(function (response) {
				setRefId(response.data.data.referral.code)
				auth.refferalID = response.data.data.referral.code
				console.log(response.data.data.referral.code)
			})
	}, [])
	return (
		<div>
			<h3>Upcoming Appointments</h3>
			<AppointmentGroup type='Upcoming' />
			<h3>Past Appointments</h3>
			<AppointmentGroup type='Past' />
			{<Referral code={refId} />}
			<Download />
		</div>
	)
}

export default MyAccountPage
