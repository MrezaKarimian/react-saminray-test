export const SetAuth=(user)=>{
    return {
        type : "SET_USER",
        payload: user
    }
}

export const LogOutAuth=()=>{
    return {
        type : "LOGOUT",
    }
}