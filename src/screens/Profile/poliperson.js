
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
    Left, Right
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
class Poliperson extends Component {
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
                    renderItem={({datum})=><Question answered="true"/>}
                    keyExtractor={datum=>datum.id}
                />
            )
        }
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <Container style={{flexDirection:"column"}}>

                <CustomHeader hasTabs navigation={navigation} />

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
                                    <Text style={{alignItems:"center", color:"#000"}}>34</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Pronouns</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>he/him/his</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Marital Status</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>Divorced</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Education</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>Columbia University</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Contact</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>any format</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold", fontSize:23}}>Verified Documents</Text>
                                </Left>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Birth Certificate</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>None</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Tax Returns</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>None</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Degrees</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>None</Text>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000",fontSize:23, fontWeight:"bold"}}>Other Documents</Text>
                                </Left>
                            </ListItem>
                        </Content>
                        :
                        null
                    }
                    <View style={{bottom:this.props.seeProfile ? 0 : null,backgroundColor: "#fff", flex:1}}>
                        <Grid>
                            <Col style={{backgroundColor:"#840000"}}>
                                <TouchableOpacity onPress={this.props.toggleQuestionsOn}>
                                    <View style={styles.linkTabs_header}>
                                        <Text style={styles.linkTabs_tabCounts}>13</Text>
                                        <Text  style={styles.linkTabs_tabName}>
                                            Unanswered
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>


                            <Col style={{backgroundColor:"#000084"}}>
                                <TouchableOpacity onPress={this.props.toggleQuestionsOn}>
                                    <View style={styles.linkTabs_header}>
                                        <Text style={styles.linkTabs_tabCounts}>52</Text>
                                        <Text style={styles.linkTabs_tabName}>
                                            Answered
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>

                        </Grid>
                    </View>

                    {/*{//this.props.seeProfile ? return <Text style={{color:"#000"}}>HEYYYYY</Text> : ()=>{return this.renderQuestions()}}*/}
                    <View>
                        {!this.props.seeProfile ? this.renderQuestions() : null}
                    </View>
                </Content>

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
    seeProfile: state.profileRed.seeProfile,

})
export default  connect(mapState, mapActions)(Poliperson);

