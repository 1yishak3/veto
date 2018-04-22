import * as firebase from "firebase"
db=firebase.database()
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
export function aroundSuccess(list:any, location){
    goodz=[]
    for(item in list){

        //there should be a play on locations here
        //neighbouring cities should have priorities
        //like a numbers reference to a map?

        if(item.city === location.city){
            goodz.push(item)
        }
    }
    return dispatch=>{
        dispatch(getAround(goodz))
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
export function getProxPeople(location:Object){
       return dispatch=>{
           db.ref("polipersons/"+location.state).once("value").then((data)=>{
               dispatch(aroundSuccess(data.val(), location))
           }).catch((err)=>{
               dispatch(aroundFailure(err))
           })
       }
}
//Rule created here
//You can view politians in other states but you cannot ask them  or upvote/downvote them

export function getSearchPeople(term:string, location:Object){
    return dispatch=>{
        //very expensive action right here
        //will fix soon
        //OMG so inefficient

        db.ref("polipersons/").once("value").then((data)=>{
            let polipeople:Object =  data.val()
            let result = new Set([])
            for(let state:Object in polipeople){
                let rand=Math.floor(Math.random()*Object.keys(state).length)
                for(i=0;i<5;i++){
                    result.add(state[Object.keys(state)[rand]])
                    rand=Math.floor(Math.random()*Object.keys(state).length)
                }
            }
            let arrayForm = Array.from(result)
            dispatch(searchSuccess(arrayForm))
        }).catch((err)=>{
            dispatch(searchFailure(err))
        })
    }
}
