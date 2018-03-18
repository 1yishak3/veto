export function isLoadingAround(bool:Boolean){
    return{
        type:"IS_LOADING_AROUND",
        param:bool
    }
}
export function isLoadingSearch(bool:Boolean){
    return{
        type:"IS_LOADING_SEARCH",
        param:bool
    }
}
export function getAround(list:any){
    return{
        type:"FETCHED_AROUND",
        param:list
    }
}
export function putSearch(list:any){
    return{
        type:"FETCHED_SEARCH",
        param:list
    }
}
export function searchSuccess(list:any){
    return dispatch=>{
        dispatch(putSearch(list))
        dispatch(isLoadingSearch(false))
        dispatch(isLoadingAround(false))
    }
}
export function searchFailure(err:any){
    return dispatch=>{
        dispatch(isLoadingSearch(false))
        dispatch(failure(err))
    }
}
export function aroundFailure(err:any){
    return dispatch=>{
        dispatch(isLoadingAround(false))
        dispatch(failure(err))
    }
}
export function aroundSuccess(list:any){
    return dispatch=>{
        dispatch(getAround(list))
        dispatch(isLoadingSearch(false))
        dispatch(isLoadingAround(false))
    }
}
export function failure(err:any){
    return {
        type:"FETCH_ERROR",
        param:err
    }
}
