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
export async function fetchedUserData(data:any){
  var qs = data.questions;
  var questions = {};
  for (var tid in qs){
    await db.ref("/threads/" + tid).once("value").then((data)=>{
      questions.push(data);
    }).catch((err)=>{
      console.log("Erred: " + err);
    });
  }
  //I don't know about the following line of code
  //while(Object.keys(qs) !== Object.keys(questions));

  return (dispatch =>{
    dispatch(userDataSet(data));
    dispatch(itemsFetchData(questions));
  });

}
