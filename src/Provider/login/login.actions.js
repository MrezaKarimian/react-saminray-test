export const SetLogin=(userInfo)=>{
    return{
        type: "SET_STATE",
        payload: userInfo
    }
}

export const ResetLogin=()=>{
    return{
        type: "RESET_STATE",
    }
}