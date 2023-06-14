import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { UserReducer } from '../redux/reducers/UserReducer';
import { delay } from 'redux-saga/effects';

const PrivateComponent =  () => {
   
    let lifesycle = localStorage.getItem("lifesycle");
    if(lifesycle=="true"){
        return <Outlet/>
    }
    else return <Navigate to="/login"/>
}

export default PrivateComponent
