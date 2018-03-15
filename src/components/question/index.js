import React, { Component } from "react";
import { Image,  TouchableOpacity} from "react-native";
import { Icon, Button, Left, ListItem, Right, Body, Header, Content, Thumbnail, View, Text} from "native-base";

import styles from "./styles";
// const headerLogo = require("../../../assets/header-logo.png");

class Question extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <Content style={{backgroundColor:"#d987ff", paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
            <Content style={{backgroundColor:"#50128d",flexDirection:"column"}}>

                <View style={{padding:23,flexDirection:"row"}}>
                    <Left style={{alignContent:"center",flexDirection:"column"}}>
                        <Thumbnail
                            source={require("../../../assets/Contacts/saurav.png")}
                            style={styles.profilePic}
                        />
                        <Text>
                            Ekele
                        </Text>
                    </Left>
                    <Icon active name="md-arrow-round-forward" style={{fontSize: 55}}/>
                    <Right style={{alignContent:"center",flexDirection:"column"}}>
                        <Thumbnail
                            source={require("../../../assets/Contacts/sankha.png")}
                            style={styles.profilePic}
                        />
                        <Text>
                            Ekele2
                        </Text>
                    </Right>
                </View>
                <TouchableOpacity></TouchableOpacity>
                <View style={{padding:23}}>
                    <Text selectable={true} selectionColor={"#d987ff"} >This is a sample text that should be actually a question</Text>
                </View>

                {this.props.answered ?
                    <View style={{padding:23,flexDirection:"row"}}>

                        <Left>
                            <TouchableOpacity>
                            <Icon active name="md-arrow-dropdown-circle" style={{color:"#840000",fontSize:55}}/>
                            </TouchableOpacity>
                        </Left>


                        <Right>
                            <TouchableOpacity>
                            <Icon active name="md-arrow-dropup-circle" style={{color:"#000084",fontSize:55}}/>
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
