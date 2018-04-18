import {AsyncStorage} from "react-native"
var initState={
    currentPage:null
    user:null

}

//Thinking of hashing uid.
//exactly how is still a question

AsyncStorage.getItem("veto-status").then((val)=>{
    initState={...val, huid:val.user.huid}
})


export default function(state:any=initState, action:Function){
    switch(action.type) {
        case ("USER_DATA_FETCHED"):
            return {...state, user:action.data}
        case (""):
            return {...state}
        default:
            return state
    }
}
