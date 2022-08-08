
const info = JSON.parse(localStorage.getItem("Node"))


const init = {
    userName : info?.name ||  null,
    token : info?.token || null,
}


export default function authReducer(state=init,action){
    const{type,payload} = action
    switch(type){
        case "LOGIN" : 
        return{
            userName : payload.name,
            token : payload.token
        }
        case "LOGOUT" :
            return {
                userName : null,
                token : null
            }

        default :
        return state
    }
}