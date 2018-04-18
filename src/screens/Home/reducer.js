const initialState = {
    isLoading: true,
    hasErrored: false,
    questions: []
};
export default function(state: any = initialState, action: Function) {
    switch (action.type) {
        case "ITEMS_HAS_ERRORED":
            return { ...state, hasErrored: action.data };
        case "ITEMS_IS_LOADING":
            return { ...state, isLoading: false };
        case "ITEMS_FETCH_DATA_SUCCESS":
            return { ...state, questions: action.data };
        default:
            return state;
    }
}
