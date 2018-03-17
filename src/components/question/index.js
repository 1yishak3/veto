import React, { Component} from "react";
import { Image,  TouchableOpacity, Dimensions} from "react-native";
import { Icon, Button, Left,Container, ListItem, Right, Body, Header, Content, Thumbnail, View, Text} from "native-base";

import styles from "./styles";
// const headerLogo = require("../../../assets/header-logo.png");

class Question extends Component {
    render() {
        const navigation = this.props.navigation;
        return (

            <Content style={{backgroundColor:"#50128d",paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
                <Content style={{backgroundColor:"#50128d",flexDirection:"column"}}>
                    <TouchableOpacity>
                    <View style={{padding:13,flexDirection:"row"}}>
                        <Left style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/saurav.png")}
                                style={{width:73, height:73, borderRadius:100}}
                            />
                            <Text>
                                Ekele
                            </Text>
                        </Left>
                        <Icon active name="md-arrow-round-forward" style={{fontSize: 55}}/>
                        <Right style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/sankha.png")}
                                style={{width:73, height:73, borderRadius:100}}
                            />
                            <Text>
                                Ekele2
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

export default Question;
