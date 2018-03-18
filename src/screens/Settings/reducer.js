const initialState={
    profile:null
}
export default function(state:any = initialState, action:Function) {
    switch(action.type){
        case "update":
            return {...state, profile:action.updates}
        default:
            return state
    }


}
