import { AppRegistry } from "react-native";
import * as firebase from "firebase"
import App from "./App";
var config = {
    apiKey: "AIzaSyBCTYaAABXDruFLXoweJyHady_KSGC_xrk",
    authDomain: "veto-13-8477c.firebaseapp.com",
    databaseURL: "https://veto-13-8477c.firebaseio.com",
    projectId: "veto-13",
    storageBucket: "veto-13.appspot.com",
    messagingSenderId: "36589996001"
};
firebase.initializeApp(config);

AppRegistry.registerComponent("Veto", () => App);
