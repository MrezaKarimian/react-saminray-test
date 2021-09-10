export const SetAddCategory=(categoryInfo)=>{
    return {
        type : "SET_STATE",
        payload: categoryInfo
    }
}

export const ResetAddCategory=()=>{
    return {
        type : "RESET_STATE",
    }
}