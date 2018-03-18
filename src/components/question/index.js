import React, { Component} from "react";
import { Image,  TouchableOpacity, Dimensions} from "react-native";
import { Icon, Button, Left,Container, ListItem, Right, Body, Header, Content, Thumbnail, View, Text} from "native-base";
import {setThreadId} from "../../actions"
import {connect} from "react-redux"
// const headerLogo = require("../../../assets/header-logo.png");

class Question extends Component {
    goThread = (uid:any)=>{
        this.props.setTid(uid)
        this.props.navigation.navigate("Thread")
    }
    render() {
        const navigation = this.props.navigation;
        return (

            <Content style={{backgroundColor:"#50128d",paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
                <Content style={{backgroundColor:"#50128d",flexDirection:"column"}}>
                    <TouchableOpacity onPress={this.goThread(this.props.data.uid)}>
                    <View style={{padding:13,flexDirection:"row"}}>
                        <Left style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/saurav.png")}
                                style={{alignSelf:"flex-start",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{alignSelf:"flex-start"}}>
                                Ekele
                            </Text>
                        </Left>
                        {/*<Icon active name="md-arrow-round-forward" style={{fontSize: 55}}/>*/}
                        <Text style={{paddingTop:19,fontSize:23, fontWeight:"bold"}}>asked</Text>
                        <Right style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/sankha.png")}
                                style={{alignSelf:"flex-end",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{alignSelf:"flex-end"}}>
                                Ekele2 what
                            </Text>
                        </Right>
                    </View>

                    <View style={{padding:13}}>
                        <Text selectable={true} selectionColor={"#d987ff"} >This is a sample text that should be actually a question</Text>
                    </View>
                </TouchableOpacity>

                    {this.props.answered ?
                        <View style={{padding:13,flexDirection:"row"}}>

                            <Left>
                                <TouchableOpacity>
                                    <Icon active name="md-arrow-round-down" style={{color:"#840000",fontSize:(0.13*Dimensions.get("window").width)}}/>
                                </TouchableOpacity>
                            </Left>


                            <Right>
                                <TouchableOpacity>
                                    <Icon active name="md-arrow-round-up" style={{color:"#000084",fontSize:(0.13*Dimensions.get("window").width)}}/>
                                </TouchableOpacity>
                            </Right>

                        </View>
                        :
                        null
                    }
                </Content>
            </Content>

        );
    }
}
function bindAction(dispatch){
    return{
        setTid: (tid:string)=>dispatch(setThreadId(tid))
    }
}
export default connect(bindAction)(Question);
