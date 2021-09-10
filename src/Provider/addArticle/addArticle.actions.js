export const SetAddArticle=(articleInfo)=>{
    return {
        type : "SET_STATE",
        payload: articleInfo
    }
}

export const ResetAddArticle=()=>{
    return {
        type : "RESET_STATE",
    }
}