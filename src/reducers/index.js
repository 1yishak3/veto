import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"

import homeReducer from "../screens/Home/reducer"
import settingsRed from "../screens/Settings/reducer"
import sideRed from "../screens/Sidebar/reducer"

export default combineReducers({
    form: formReducer,
    homeReducer,
    settingsRed,
    sideRed
})
