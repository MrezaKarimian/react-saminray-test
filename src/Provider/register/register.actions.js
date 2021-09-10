export const SetRegister=(userInfo)=>{
    return{
        type: "SET_STATE",
        payload: userInfo
    }
}

export const ResetRegister=()=>{
    return{
        type: "RESET_STATE",
    }
}