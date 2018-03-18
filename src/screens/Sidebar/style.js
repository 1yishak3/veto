const React = require("react-native");

const { Platform } = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
    links: {
        paddingTop: Platform.OS === "android" ? 8 : 10,
        paddingBottom: Platform.OS === "android" ? 8 : 10,
        paddingLeft: Platform.OS === "android" ? 0 : 10,
        borderBottomWidth: Platform.OS === "android" ? 0 : 0,
        borderBottomColor: "transparent"
    },
    linkText: {
        paddingLeft: 15
    },
    logoutContainer: {

        paddingTop: 0,
        backgroundColor:"#50128d"
    },
    logoutbtn: {
        paddingTop: 13,
        paddingBottom:13,
        paddingLeft:"20%",
        flexDirection: "row",
        borderTopWidth: 0.5,
        borderTopColor: "#fff",
        alignItems:"center",
        alignContent:"center"
    },
    background: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: primary
    },
    drawerContent: {
        paddingTop: Platform.OS === "android" ? 0 : 0,
        backgroundColor:"#50128d",


    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: Platform.OS === "android" ? 40 : 20
    },
    poliperson:{
        flexDirection:"row",
        height:60,
        paddingLeft:23,
        paddingRight:23
    },
    polipic:{
        height:45,
        width:45,
        borderRadius:100,
        paddingLeft:13,
        paddingBottom:7,
        paddingTop:7
    },
    politext:{
        paddingLeft:13,
        paddingTop:15
    }
};
