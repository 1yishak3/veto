const initialState={
    poliAround:[{uid:"werty", data:"xyz"},{uid:"qwerty", data:"xyz"},
        {uid:"wertyq", data:"xyz"}],
    searchResults:[],
    isLoadingAround:true,
    isLoadingSearch:false,
    erred:false,
    error:"Something Went Wrong. Sorry!"
}
export default function(state=initialState, action:Function){
    switch(action.type){
        case "IS_LOADING_AROUND":
            return {...state, isLoadingAround:action.param}
        case "IS_LOADING_SEARCH":
            return {...state, isLoadingSearch:action.param}
        case "FETCH_ERROR":
            //figure out how to return error data here
            //or just something went wrong
            return {...state, erred:true,  error:action.param}
        case "FETCHED_AROUND":
            return {...state, poliAround:action.param}
        case "FETCHED_SEARCH":
            return {...state, searchResults:action.param}
        default:
            return state
    }
}
