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

export function getThread(thread:Object){
    return dispatch => {
        dispatch(fetchSuccess(thread))
        dispatch(isLoading(false))
    }
}
