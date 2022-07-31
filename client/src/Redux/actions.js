import * as types from './actionTypes'
import axios from 'axios'


function getCountriesRequest(){
    return {
        type : types.GET_COUNTRIES_REQUEST
    }
}

export function getCountriesSuccess(data){
    return {
        type : types.GET_COUNTRIES_SUCCESS,
        payload: data
    }
}

function getCountriesFailure(){
    return {
        type : types.GET_COUNTRIES_FAILURE
    }
}

 export function mainGetCountriesData(){
    return (dispatch) =>{
        dispatch(getCountriesRequest())
        axios.get('http://localhost:3000/stats')
        .then(res=>{
            // console.log(res.data)
            dispatch(getCountriesSuccess(res.data))
        })
        .catch(err=>{
            console.log("error",err)
        })

    }
}

export function deleteCountryData(id){
    return (dispatch) => {
        axios.delete(`http://localhost:3000/stats/${id}`)
        .then(res=>{
            dispatch(mainGetCountriesData())
        })
        .catch(err=>{
            console.log("delete request Error")
        })
    }
}


