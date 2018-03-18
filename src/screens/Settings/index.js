import React, { Component, Platform } from "react";
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
    Left, Right, Footer,Input, Body, Card
} from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";
import CustomHeader from "../../components/CustomHeader";
import Question from "../../components/question"

import styles from "./styles";
import datas from "./data";
import {toggleQuestions, update} from "../../actions";
import {DocumentPicker, DocumentPickerUtil} from "react-native-document-picker"
import FS from "react-native-fs"
type Props = {
    navigation: () => void
};
class Settings extends Component {
    state: {
        listViewData: any,
        modal:false,
        file:"",
        uploaded:false
    };
    props: Props;
    ds: Object;
    constructor(props: Props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listViewData: datas,
            modal:false,
            file:"",
            uploaded:false
        };
    }

    getUri(){
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.allFiles()]
        }, (err, res) => {
            console.log(err);
            this.file = res
            console.log(res)

            this.setState({
                ...this.state,
                file: this.file,
                uploaded:true
            })
            //do something with the file upon save change
        })


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
                    renderItem={({datum})=><Card><Question answered={true}/></Card>}
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
                {this.props.seeProfile ?
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={{backgroundColor: "#fff" }}
                    >


                        <Content style={{height:this.props.seeProfile ? 0.73*Dimensions.get("window").height : 0,flex:9}}>

                            <Content style={{paddingTop:7}}>

                                <Text style={{textAlign:"center",color:"#000"}}>--No Bio Yet--</Text>

                            </Content>
                            <Modal
                                style={{backgroundColor:"#000"}}
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modal}
                                backButtonClose
                                onRequestClose={() => {
                                    alert('Modal has been closed.');
                                }}>

                                <Content >
                                    <View>
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
                                        {true ?
                                            <Content>
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
                                                        <Button style={{width:100, height:30}} ><Text>Upload</Text></Button>
                                                    </Right>
                                                </ListItem>
                                                <ListItem>
                                                    <Left>
                                                        <Text bold
                                                              style={{alignItems: "center", color: "#000", fontWeight: "bold"}}>Tax
                                                            Returns</Text>
                                                    </Left>
                                                    <Right>
                                                        <Button style={{width:100, height:30}} ><Text>Upload</Text></Button>
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
                                                        <Button  style={{width:100, height:30}} ><Text>Upload</Text></Button>
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
                                                { this.state.uploaded ?<View >
                                                <Text style={{color:"#000"}}>{this.state.file.fileName}</Text>
                                                <Text style={{color:"#000"}}>{this.state.file.type}</Text>
                                                        <Text style={{color:"#000"}}>{this.state.file.uri}</Text></View>
                                                    :null}
                                                {this.props.otherDocs ?
                                                    <FlatList
                                                        data={this.props.otherDocs}
                                                        renderItem={({item})=>
                                                            <ListItem>
                                                                <Left>
                                                                    <Text>{item.name}</Text>
                                                                </Left>
                                                                <Right>
                                                                    <Button><Text>Remove</Text></Button>
                                                                </Right>
                                                            </ListItem>
                                                        }
                                                    />
                                                    :
                                                    null}
                                                <Body style={{padding:13}}>
                                                <Button onPress={()=>this.getUri()}><Text>Upload</Text></Button>
                                                </Body>
                                            </Content>
                                            :
                                            null
                                        }
                                    </View>
                                </Content>
                                <Footer>
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
                                </Footer>

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
                                    <Text style={{width:150,alignItems:"center", color:"#000"}}>34</Text>
                                </Right>

                            </ListItem>

                            <ListItem>
                                <Left>
                                    <Text bold style={{ color:"#000", fontWeight:"bold"}}>Pronouns</Text>
                                </Left>
                                <Right>
                                    <Text style={{ width:150,color:"#000"}}>he/him/his</Text>
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
                                    <Text style={{width:150,alignContent:"center", color:"#000"}}>any format</Text>
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
                            <Button style={{alignSelf:"center", padding:13}}onPress={()=>this.renderModal(true)}>
                                <View style={{height:55,padding:13,alignContent:"center", backgroundColor:"#50128d"}}>
                                    <Text style={{alignSelf:"center"}}>Edit</Text>
                                </View>
                            </Button>
                        </Content>


                    </Content>
                    :
                    null
                }
                <Footer style={{bottom:this.props.seeProfile ? 0 : null,backgroundColor: "#fff"}}>
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

                                        <Text style={styles.linkTabs_tabName}>
                                            Questions [52]
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        }
                    </Grid>
                </Footer>
                {!this.props.seeProfile ?
                    <Content style={{backgroundColor:"#fff"}}>
                        <View>
                            {this.renderQuestions()}
                        </View>
                    </Content>
                    : null}
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

