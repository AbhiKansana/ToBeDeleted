

export function authLogin(obj){
 return{
    type : "LOGIN",
    payload : obj
 }
}

export function authLogout(){
   return{
      type : "LOGOUT"
   }
}