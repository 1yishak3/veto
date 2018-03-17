
import React, { Component } from "react";
import { Image, TouchableOpacity, ListView, Dimensions, FlatList} from "react-native";
import {connect} from "react-redux"
import {
    Container,
    Content,
    Text,
    Thumbnail,
    View,
    List,
    ListItem,
    Button,
    Icon,
    Left, Right, Body, Card, Footer
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import CustomHeader from "../../components/CustomHeader";
import Question from "../../components/question"

import styles from "./styles";
import datas from "./data";
import {toggleQuestions} from "../../actions";

type Props = {
    navigation: () => void
};
class Citizen extends Component {
    state: {
        listViewData: any
    };
    props: Props;
    ds: Object;
    constructor(props: Props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listViewData: datas
        };
    }
    renderQuestions=()=>{
        if(this.ds.cloneWithRows(this.state.listViewData).getRowCount() === 0){
            return (
                <View style={styles.linkTabs}>
                    <ListItem
                        style={{
                            backgroundColor: "#fff",
                            justifyContent: "center"
                        }}
                    >
                        <Text style={styles.textNote}>Empty List</Text>
                    </ListItem>
                </View>)
        } else {
            return (
                <FlatList
                    data={datas}
                    renderItem={({datum})=><Card><Question answered="true"/></Card>}
                    keyExtractor={datum=>datum.id}
                />
            )
        }
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <Container style={{flexDirection:"column"}}>

                <CustomHeader  navigation={navigation} />

                <View style={styles.profileInfoContainer}>
                    <TouchableOpacity onPress={this.props.toggleQuestionsOff}>
                        <View style={{ alignSelf: "center" }}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/sankha.png")}
                                style={styles.profilePic}
                            />
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileUser}>Fafa Yelijoch Wetet</Text>
                            <Text note style={styles.profileUserInfo}>
                                Mn Abah Agebah?
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Content
                    showsVerticalScrollIndicator={false}
                    style={{backgroundColor: "#fff" }}
                >
                    {this.props.seeProfile ?
                        <Content style={{height:this.props.seeProfile ? 0.73*Dimensions.get("window").height : 0,flex:9}}>
                            <Content style={{paddingTop:7}}>
                                <Text style={{textAlign:"center",color:"#000"}}>--No Bio Yet--</Text>
                            </Content>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold", fontSize:23}}>Personal Details</Text>
                                </Left>

                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Age</Text>
                                </Left>
                                <Right>
                                    <Text style={{width:150,alignItems:"center", color:"#000"}}>34</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Pronouns</Text>
                                </Left>
                                <Right>
                                    <Text style={{width:150,alignItems:"center", color:"#000"}}>He/Him/His</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Marital Status</Text>
                                </Left>
                                <Right>
                                    <Text style={{width:150,alignItems:"center", color:"#000"}}>Divorced</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Education</Text>
                                </Left>
                                <Right>
                                    <Text style={{width:150,alignItems:"center", color:"#000"}}>Columbia University</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Party</Text>
                                </Left>
                                <Right>
                                    <Text style={{width:150,alignItems:"center", color:"#000"}}>Fucking Republican</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Contact</Text>
                                </Left>
                                <Right>
                                    <Text style={{width:150,alignItems:"center", color:"#000"}}>any format</Text>
                                </Right>
                            </ListItem>
                        </Content>
                        :
                        null
                    }


                    {/*{//this.props.seeProfile ? return <Text style={{color:"#000"}}>HEYYYYY</Text> : ()=>{return this.renderQuestions()}}*/}
                    <View>
                        {!this.props.seeProfile ? this.renderQuestions() : null}
                    </View>
                </Content>
                <Footer style={{bottom:this.props.seeProfile ? 0 : null,backgroundColor: "#fff"}}>
                    <Grid>

                        <Col style={{backgroundColor:"#000084"}}>
                            <TouchableOpacity onPress={this.props.toggleQuestionsOn}>
                                <View style={styles.linkTabs_header}>

                                    <Text style={styles.linkTabs_tabName}>
                                        Questions[52]
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </Col>

                    </Grid>
                </Footer>

            </Container>
        );
    }
}

function mapActions(dispatch){
    return {
        toggleQuestionsOn:()=>dispatch(toggleQuestions(false)),

        toggleQuestionsOff:()=>dispatch(toggleQuestions(true))
    }
}

const mapState = state=>({
    uid: state.profileRed.uid,
    data:state.profileRed.data,
    seeProfile: state.profileRed.seeProfile
})
export default  connect(mapState, mapActions)(Citizen);

