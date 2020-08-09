import {createContext} from 'react'

export const AuthContext=createContext({
    isLoggedIn:false,
    userId:null,
    token:null,
    location:null,
    specialisation:null,
    city:null,
    docName:null,
    docId:null,
    hospitalId:"5ed4d26c7004f434b8f8d34e",
    cost:300,
    login:()=>{},
    logout:()=>{}
})