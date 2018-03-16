import React, { Component } from "react";
import { Image, TouchableOpacity, ListView, Dimensions, FlatList, Modal, TextInput} from "react-native";
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
    Left, Right, Footer,Input, Body
} from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import CustomHeader from "../../components/CustomHeader";
import Question from "../../components/question"

import styles from "./styles";
import datas from "./data";
import {toggleQuestions, update} from "../../actions";
import {DocumentPicker, DocumentPickerUtil} from "react-native-document-picker"

type Props = {
    navigation: () => void
};
class Settings extends Component {
    state: {
        listViewData: any,
        modal:false
    };
    props: Props;
    ds: Object;
    constructor(props: Props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listViewData: datas,
            modal:false
        };
    }
    getUri(){
        
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
    renderModal=(fore:Boolean)=>{
        this.setState({
            ...this.state,
            modal:fore
        })

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
                                One of the properties here (varies)
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
                            <Modal
                                style={{backgroundColor:"#000"}}
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modal}
                                onRequestClose={() => {
                                    alert('Modal has been closed.');
                                }}>

                                <View style={{height:"95%"}}>
                                    <ListItem >

                                        <Left>
                                            <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Bio</Text>
                                        </Left>
                                        <Body>
                                            <TextInput numberOFLine={5} multiline={true} placeholder={"--No Bio--"} placeholderTextColor={"#000"} style={{width:383,color:"#000"}}/>
                                        </Body>

                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold", fontSize:23}}>Personal Details</Text>
                                        </Left>
                                    </ListItem>
                                    <ListItem >

                                        <Left>
                                            <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Age</Text>
                                        </Left>
                                        <Right>
                                            <TextInput placeholder={"Hello World"} placeholderTextColor={"#000"} value={"34"} style={{width:150,color:"#000"}}/>
                                        </Right>

                                    </ListItem>

                                    <ListItem>
                                        <Left>
                                            <Text bold style={{ color:"#000", fontWeight:"bold"}}>Pronouns</Text>
                                        </Left>
                                        <Right>
                                            <TextInput placeholder={"Hello World"} placeholderTextColor={"#000"} value={"He/Him/His"} style={{width:150,color:"#000"}}/>
                                        </Right>
                                    </ListItem>

                                    <ListItem>

                                        <Left>
                                            <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Marital Status</Text>
                                        </Left>
                                        <Right>
                                            <TextInput placeholder={"Hello World"} placeholderTextColor={"#000"} value={"Divorced"} style={{width:150,color:"#000"}}/>
                                        </Right>

                                    </ListItem>
                                    <ListItem>

                                        <Left>
                                            <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Education</Text>
                                        </Left>
                                        <Right>
                                            <TextInput placeholder={"Hello World"} placeholderTextColor={"#000"} value={"Columbia University"} style={{width:150,color:"#000"}}/>
                                        </Right>

                                    </ListItem>

                                    <ListItem>

                                        <Left>
                                            <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Contact</Text>
                                        </Left>
                                        <Right>
                                            <TextInput placeholder={"Hello World"} placeholderTextColor={"#000"} value={"9174127058"} style={{width:150,color:"#000"}}/>
                                        </Right>

                                    </ListItem>
                                    {this.props.politician ?
                                        <View>
                                            <ListItem>
                                                <Left>
                                                    <Text bold style={{
                                                        alignItems: "center",
                                                        color: "#000",
                                                        fontWeight: "bold",
                                                        fontSize: 23
                                                    }}>Verified Documents</Text>
                                                </Left>
                                            </ListItem>
                                            <ListItem>
                                                <Left>
                                                    <Text bold
                                                          style={{alignItems: "center", color: "#000", fontWeight: "bold"}}>Birth
                                                        Certificate</Text>
                                                </Left>
                                                <Right>
                                                    <Text style={{alignItems: "center", color: "#000"}}>None</Text>
                                                </Right>
                                            </ListItem>
                                            <ListItem>
                                                <Left>
                                                    <Text bold
                                                          style={{alignItems: "center", color: "#000", fontWeight: "bold"}}>Tax
                                                        Returns</Text>
                                                </Left>
                                                <Right>
                                                    <Text style={{alignItems: "center", color: "#000"}}>None</Text>
                                                </Right>
                                            </ListItem>
                                            <ListItem>
                                                <Left>
                                                    <Text bold style={{
                                                        alignItems: "center",
                                                        color: "#000",
                                                        fontWeight: "bold"
                                                    }}>Degrees</Text>
                                                </Left>
                                                <Right>
                                                    <Text style={{alignItems: "center", color: "#000"}}>None</Text>
                                                </Right>
                                            </ListItem>
                                            <ListItem>
                                                <Left>
                                                    <Text bold style={{
                                                        alignItems: "center",
                                                        color: "#000",
                                                        fontSize: 23,
                                                        fontWeight: "bold"
                                                    }}>Other Documents</Text>
                                                </Left>
                                            </ListItem>
                                        </View>
                                        :
                                        null
                                    }

                                </View>

                                    <Grid style={{bottom:0}}>
                                        <Row>
                                            <Col style={{backgroundColor:"#840000"}}>
                                                <TouchableOpacity onPress={()=>this.renderModal(false)}>
                                                    <View style={styles.linkTabs_header}>

                                                        <Text  style={styles.linkTabs_tabName}>
                                                            Cancel
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </Col>
                                            <Col style={{backgroundColor:"#000084"}}>
                                                <TouchableOpacity onPress={()=>this.renderModal(false)}>
                                                    <View style={styles.linkTabs_header}>

                                                        <Text style={styles.linkTabs_tabName}>
                                                            Save Changes
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </Col>
                                        </Row>
                                    </Grid>
                            </Modal>


                            <ListItem>
                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold", fontSize:23}}>Personal Details</Text>
                                </Left>
                            </ListItem>
                            <ListItem >

                                <Left>
                                    <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Age</Text>
                                </Left>
                                <Right>
                                    <Text style={{alignItems:"center", color:"#000"}}>34</Text>
                                </Right>

                            </ListItem>

                            <ListItem>
                                <Left>
                                    <Text bold style={{ color:"#000", fontWeight:"bold"}}>Pronouns</Text>
                                </Left>
                                <Right>
                                    <Text style={{ color:"#000"}}>he/him/his</Text>
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
                            {this.props.politician ?
                                <View>
                                    <ListItem>
                                        <Left>
                                            <Text bold style={{
                                                alignItems: "center",
                                                color: "#000",
                                                fontWeight: "bold",
                                                fontSize: 23
                                            }}>Verified Documents</Text>
                                        </Left>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text bold
                                                  style={{alignItems: "center", color: "#000", fontWeight: "bold"}}>Birth
                                                Certificate</Text>
                                        </Left>
                                        <Right>
                                            <Text style={{alignItems: "center", color: "#000"}}>None</Text>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text bold
                                                  style={{alignItems: "center", color: "#000", fontWeight: "bold"}}>Tax
                                                Returns</Text>
                                        </Left>
                                        <Right>
                                            <Text style={{alignItems: "center", color: "#000"}}>None</Text>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text bold style={{
                                                alignItems: "center",
                                                color: "#000",
                                                fontWeight: "bold"
                                            }}>Degrees</Text>
                                        </Left>
                                        <Right>
                                            <Text style={{alignItems: "center", color: "#000"}}>None</Text>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <Text bold style={{
                                                alignItems: "center",
                                                color: "#000",
                                                fontSize: 23,
                                                fontWeight: "bold"
                                            }}>Other Documents</Text>
                                        </Left>
                                    </ListItem>
                                </View>
                                :
                                null
                            }
                            <TouchableOpacity onPress={()=>this.renderModal(true)}>
                                <View style={{height:55,paddingTop:13,alignContent:"center",width:"100%", backgroundColor:"#50128d"}}>
                                    <Text style={{alignSelf:"center"}}>Edit</Text>
                                </View>
                            </TouchableOpacity>
                        </Content>
                        :
                        null
                    }

                    <View style={{bottom:this.props.seeProfile ? 0 : null,backgroundColor: "#fff", flex:1}}>
                        <Grid>
                            {this.props.politician ?
                                <Row>
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
                                </Row>
                                :
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
                            }
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
        update:(data:Object)=>dispatch(update(data)),
        toggleQuestionsOff:()=>dispatch(toggleQuestions(true))
    }
}

const mapState = state=>({
    uid: state.profileRed.uid,
    data:state.profileRed.data,
    seeProfile: state.profileRed.seeProfile,

})
export default  connect(mapState, mapActions)(Settings);

