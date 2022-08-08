import React from 'react'
import { useSelector } from 'react-redux'
import Homepage from './Homepage'
import LoginCard from './Login'

const PrivateRoute = () => {
    const token = useSelector(state=>state.auth.token)
    if(token===null){
        return (
            <LoginCard/>
        )
    }

    else{
        return(
            <Homepage/>
        )
    }

}

export default PrivateRoute