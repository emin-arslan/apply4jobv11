import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { UserReducer } from '../redux/reducers/UserReducer';

const PrivateComponent =  () => {
    const user = useSelector((state)=> state.UserReducer)
    
    console.log('auth değeri', user.lifesycle)
    if(user.lifesycle==true){
        console.warn('wtf')
        return <Outlet/>
    }
    else return <Navigate to="/login"/>
}

export default PrivateComponent
