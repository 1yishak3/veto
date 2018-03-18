const initialState={
    tid:null,
    thread:{},
    isLoading:false,
    error:""
}
export default function(state=initialState, action:Function){
    switch (action.type){
        case("SET_THREAD_PAGE_UP"):
            return {...state, tid:action.param}
        case "IS_LOADING":
            return {...state, isLoading:action.param}
        case "INCOMING_THREAD":
            return {...state, thread:action.param}
        case "FETCH_ERROR":
            return {...state, error:action.param}
        default:
            return state
    }
}
