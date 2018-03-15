const initialState={
    uid:null,
    data:null,
    seeProfile:false
}
export default function(state:any = initialState, action:Function){
    switch(action.type){
        case "toggleQuestions":
            return {...state, seeProfile:action.param}
        default:
            return state
    }
}
