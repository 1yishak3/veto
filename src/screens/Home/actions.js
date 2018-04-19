import * as firebase from "firebase";
const db = firebase.database();

export function itemsHasErrored(bool: boolean) {
  return {
    type: "ITEMS_HAS_ERRORED",
    data: bool
  };
}
export function itemsIsLoading(bool: boolean) {
  return {
    type: "ITEMS_IS_LOADING",
    data: bool
  };
}
export function itemsFetchDataSuccess(items: Object) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    data:items
  };
}
export function itemsFetchData(data: any) {
  return dispatch => {
    dispatch(itemsFetchDataSuccess((data: any)));
    dispatch(itemsIsLoading(false));
  };
}
export function userDataSet(data){
  return {
    type:"USER_DATA_FETCHED",
    data:data
  };
}
export function atomFetched(data){
  return {
    type:"ATOM_QUESTION",
    data:data
  }
}
export function fetchedUserData(data:any){
  return (dispatch=>{
      dispatch(userDataSet(data));
      var qs = data.questions
      count=0;
      for (var tid in qs){
        db.ref("/threads/" + tid).once("value").then((data)=>{
           dispatch(atomFetched(data.val()));
           count++;
           if(count === Object.keys(qs).length){
               dispatch(itemsIsLoading(false))
           }
        }).catch((err)=>{
          dispatch(itemsHasErrored(true));
        });

      }
  })
  //I don't know about the following line of code
  //while(Object.keys(qs) !== Object.keys(questions));

}
