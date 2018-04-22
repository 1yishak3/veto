import * as firebase from "firebase"
db = firebase.database()
export function setThreadId(uid:string){
    return {
        type:"SET_THREAD_PAGE_UP",
        param:uid
    }
}

export function isLoading(bool:Boolean){
    return {
        type:"IS_LOADING",
        param: bool
    }
}

export function fetchSuccess(thread:Object){
    return {
        type:"INCOMING_THREAD",
        param:thread
    }
}

export function fetchFail(error:any){
    return dispatch=>{
        dispatch(isLoading(false))
        return {
            type:"FETCH_ERROR",
            param:error
        }
    }
}


export function getThread(thread:any){
    return dispatch => {
        db.ref("/threads/"+thread).once("value").then((data)=>{
            dispatch(fetchSuccess(data))
            dispatch(isLoading(false))
        }).catch((err)=>{
            dispatch(fetchFail(err))
        })
    }
}
