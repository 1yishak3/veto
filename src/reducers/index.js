import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"

import homeRed from "../screens/Home/reducer"
import settingsRed from "../screens/Settings/reducer"
import sideRed from "../screens/Sidebar/reducer"
import profileRed from "../screens/Profile/reducer"
import mainRed from "./mainReducer"
import threadRed from "../screens/Thread/reducer"
import adpRed from "../screens/AddPolipeople/reducer"
export default combineReducers({
    form: formReducer,
    homeRed,
    settingsRed,
    sideRed,
    profileRed,
    mainRed,
    threadRed,
    adpRed
})


