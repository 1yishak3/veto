export function filterOwnPolipeople(str:string){
    return ({
        type:"filterOwnPolipeople",
        param:str
    })
}
export function setProfileId(uid:string){
    return({
        type:"whichUid",
        param:uid
    })
}

