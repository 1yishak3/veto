export {
    itemsHasErrored,
    itemsIsLoading,
    itemsFetchDataSuccess,
    itemsFetchData,
    userDataSet,
    fetchedUserData,
    atomFetched,
} from "../screens/Home/actions";
export {
    update
} from "../screens/Settings/actions"
export {
    filterOwnPolipeople,
    setProfileId
} from "../screens/Sidebar/actions"

export{
    toggleQuestions,
} from "../screens/Profile/actions"
export {
    setThreadId,
    getThread,
    fetchSuccess,
    fetchFail,
    isLoading
} from "../screens/Thread/actions"
export {
    getProxPeople,
    getAround,
    aroundSuccess,
    searchSuccess,
    failure,
    aroundFailure,
    isLoadingAround,
    isLoadingSearch
} from "../screens/AddPolipeople/actions"

export {} from "./mainActions"

export function decypher(uid){
    return uid
}

export function cypher(uid){
    return uid
}
