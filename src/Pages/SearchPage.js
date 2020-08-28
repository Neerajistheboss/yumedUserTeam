import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import DocCard from '../components/DocCard'
import { AuthContext } from '../context/auth-context'
import Booking from '../Components/Booking'

const SearchPage = () => {
	const auth = useContext(AuthContext)

	let [doctors, setDoctors] = useState([])
	let searchFilter = JSON.parse(localStorage.getItem('filter'))
	auth.specialisation = searchFilter.specailisation
	auth.city = searchFilter.city
	auth.hospitalId = searchFilter.hospitalId

	useEffect(() => {
		console.log(`${auth.city}  ${auth.specialisation} ${auth.hospitalId}`)
		console.log(process.env.REACT_APP_YUVER_IP)
		let queryStr = `http://${process.env.REACT_APP_YUVER_IP}/api/v1/doctors?`
		if (auth.specialisation)
			queryStr = queryStr + `specailisation=${encodeURI(auth.specialisation)}`
		if (auth.city) queryStr = queryStr + `&city=${auth.city}`
		if (auth.docName) queryStr = queryStr + `&name=${auth.docName}`
		if (auth.hospitalId) queryStr = queryStr + `&hospital=${auth.hospitalId}`
		console.log(queryStr)
		axios.get(`${queryStr}`).then(function (response) {
			const doctorList = response.data.data
			console.log(doctorList[0])
			setDoctors(doctorList)
		})
	}, [])

	// let doctors=[{}];

	// useEffect(()=>{
	//     axios.get("http://localhost:8080/api/doctors/search?specialization=ENT")
	//      .then(function(response){
	//        doctors=response.data.doctors
	//        console.log(doctors)
	//         // setEntries(doctors)

	//      })
	// },[])
	// const doctorList //use axios to search for list of doctors base in parameters in auth context

	return (
		<div style={{ backgroundColor: '#eee', minHeight: '85vh' }}>
			{doctors.map((doctor) => (
				<Booking
					photo={'https://i.ibb.co/hFJnBtL/download.jpg'}
					dName={doctor.name}
					speciality={doctor.specailisation}
					hospitalName={doctor.hospital.name}
					city={doctor.city}
					docId={doctor._id}
					hospitalId={doctor.hospital._id}
					avgReviews='2.5'
					numberReviews='Number of Reviews'
					description='Description'
					fee={doctor.normalFee}
				/>
			))}
			{/* <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" /> */}
		</div>
	)
}

export default SearchPage
