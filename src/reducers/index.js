import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"

import homeReducer from "../screens/Home/reducer"
import settingsRed from "../screens/Settings/reducer"
import sideRed from "../screens/Sidebar/reducer"
import profileRed from "../screens/Profile/reducer"
import mainRed from "./mainReducer"
export default combineReducers({
    form: formReducer,
    homeReducer,
    settingsRed,
    sideRed,
    profileRed,
    mainRed
})


