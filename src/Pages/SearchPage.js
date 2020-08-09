import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import DocCard from '../components/DocCard'
import { AuthContext } from '../context/auth-context'
import Appointment from '../Components/Appointment';
const SearchPage = () => {

    const auth = useContext(AuthContext)
    const doctor = {
        docId: "saidohaspdja",
        name: "dospajd",
        specailisation: "sdajpdsoa",
        education: "sdaopjodsa",
        experience: 10,
        normalFee: 300

    }

    let [doctors, setDoctors] = useState([{ photo: "sdoaods", category: "ksda", user: { name: "" } }])


    useEffect(() => {
        console.log(`${auth.city}  ${auth.specialisation} ${auth.hospitalId}`)
        let queryStr = "http://localhost:5000/api/v1/doctors?"
        if (auth.specialisation)
            queryStr = queryStr + `specailisation=${auth.specialisation}`
        if (auth.city)
            queryStr = queryStr + `&city=${auth.city}`
        if (auth.docName)
            queryStr = queryStr + `&name=${auth.docName}`
        if (auth.hospitalId)
            queryStr = queryStr + `&hospital=${auth.hospitalId}`
        console.log(queryStr)
        axios.get(`${queryStr}`)
            .then(function (response) {

                const doctorList = response.data.data

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
        doctors && < div > {
            doctors.map((doctor) => (<
                Appointment photo={"https://i.ibb.co/hFJnBtL/download.jpg"}
                dName={doctor.name}
                speciality={doctor.specailisation}
                locality="Locality"
                city={doctor.city}
                zCode="Zip Code"
                avgReviews="2.5"
                numberReviews="Number of Reviews"
                description="Description"
                fee={doctor.normalFee}
                timeSlots={
                    [{ day: 1, time: ["9:00AM", "9:30AM"] }, { day: "4", time: ["10:00AM", "10:30AM"] }]
                }
            />

            ))

        } {
                /* <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" /> */
            }


            <
        /div>
    )
}

export default SearchPage