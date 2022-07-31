import * as types from './actionTypes'
import axios from 'axios'


function getEditRequest(){
    return {
        type : types.UPDATE_COUNTRY_REQUEST
    }
}

export function getEditSuccess(data){
    return {
        type : types.UPDATE_COUNTRY_SUCCESS,
        payload: data
    }
}

function getEditFailure(){
    return {
        type : types.UPDATE_COUNTRY_FAILURE
    }
}

 export function mainUpdateCountries(id,obj){
    return (dispatch) =>{
        dispatch(getEditRequest())
        console.log(id,obj)
        axios.patch(`http://localhost:3000/stats/${id}`,obj)
        .then(res=>{
            dispatch(getEditSuccess())
            console.log("resEdit",res)
        })
        .catch(err=>{
            dispatch(getEditFailure())
            console.log("error",err)
        })

    }

 }

