
import React, { Component } from "react";
import { Image, TouchableOpacity, Modal, ListView, Dimensions, FlatList, TextInput} from "react-native";
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
    Left,
    Right,
    Fab,
    Card,
    Footer
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
        listViewData: any,
        activeModal:false,
        lines:20
    };
    props: Props;
    ds: Object;
    constructor(props: Props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listViewData: datas,
            activeModal:false,
            lines:20
        };
    }
    adjustLines(height:any){
        const newLines=2+((height-40)/16.5)
        if(newLines>1) {
            this.setState({...this.state, lines: newLines})
        }

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
                    renderItem={({item})=>{
                        item["uid"]=item.id
                        return(<Card><Question data={item} navigation={this.props.navigation} answered="true"/></Card>)}}
                    keyExtractor={datum=>datum.id}
                />
            )
        }
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <Container style={{flexDirection:"column"}}>

                <Container>

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
                    {this.props.seeProfile ?
                        <Content
                            showsVerticalScrollIndicator={false}
                            style={{backgroundColor: "#fff" }}
                        >

                            <Content style={{height:this.props.seeProfile ? null: 0}}>
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
                                        <Text style={{width:150,alignItems:"center", color:"#000"}}>he/him/his</Text>
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
                                        <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Contact</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{width:150,alignItems:"center", color:"#000"}}>any format</Text>
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
                                        <Text style={{width:150,alignItems:"center", color:"#000"}}>None</Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Tax Returns</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{width:150,alignItems:"center", color:"#000"}}>None</Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text bold style={{alignItems:"center", color:"#000", fontWeight:"bold"}}>Degrees</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{width:150,alignItems:"center", color:"#000"}}>None</Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text bold style={{alignItems:"center", color:"#000",fontSize:23, fontWeight:"bold"}}>Other Documents</Text>
                                    </Left>
                                </ListItem>
                            </Content>


                        </Content>
                        :
                        null
                    }
                    <Footer style={{bottom:this.props.seeProfile ? 0 : null,backgroundColor: "#fff"}}>
                        <Grid>
                            <Col style={{backgroundColor:"#840000"}}>
                                <Button transparent style={{width:"100%", height:"100%"}} onPress={this.props.toggleQuestionsOn}>
                                    <View style={styles.linkTabs_header}>
                                        <Text  style={styles.linkTabs_tabName}>
                                            Unanswered [13]
                                        </Text>
                                    </View>
                                </Button>
                            </Col>


                            <Col style={{backgroundColor:"#000084"}}>
                                <Button transparent style={{width:"100%", height:"100%"}} onPress={this.props.toggleQuestionsOn}>
                                    <View style={styles.linkTabs_header}>

                                        <Text style={styles.linkTabs_tabName}>
                                            Answered [52]
                                        </Text>
                                    </View>
                                </Button>
                            </Col>

                        </Grid>
                    </Footer>

                    {!this.props.seeProfile ?
                        <Content style={{backgroundColor:"#fff"}}>
                            <View>
                                {this.renderQuestions()}
                            </View>
                        </Content>
                        : null}
                    <Fab
                        active
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: "#b839a2" }}
                        position="bottomRight"
                        onPress={() => this.setState({ ...this.state, activeModal: true })}>

                        <Icon name="md-create"/>

                    </Fab>
                </Container>
                <Modal
                    style={{backgroundColor:"#7413b9"}}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.activeModal}
                    backButtonClose

                    isOpen={this.state.activeModal}
                    onRequestClose={()=>{
                        this.setState({
                            ...this.state,
                            activeModal:false
                        })
                        alert("Lol you closed shit")
                    }}>
                    <Content style={styles.modal}>
                        <View >
                        <TextInput
                            autoGrow
                            autoCapitalize={"sentences"}
                            returnKeyType={"next"}
                            multiline={true}
                            numberOfLines={20}
                            placeholder={"Type up your question here. We'll" +
                            " make sure they answer it ;)"}
                            underlineColorAndroid={"#fff"}
                            onContentSizeChange={(e)=>this.adjustLines(e.nativeEvent.contentSize.height)}

                            style={{backgroundColor:"#fff",width:"100%",
                                height:"100%",paddingTop:50,
                                borderWidth:0, borderColor:"#50128d"}}
                        >
                        </TextInput>
                        </View>
                    </Content>
                    <Footer>
                        <View style={{bottom:0, flexDirection:"row"}}>


                            <Button style={{justifyContent:"center",backgroundColor:"#b60000",width:"50%", height:"100%"}}
                                    onPress={() => this.setState({ ...this.state, activeModal: false })}>
                                <View style={{alignItems:"center"}}>
                                    <Text  style={{alignSelf:"center"}}>
                                        Cancel
                                    </Text>
                                </View>
                            </Button>

                            <Button  style={{justifyContent:"center",
                                backgroundColor:"#0000ff",
                                width:"50%",
                                height:"100%"}} onPress={()=>this.renderModal(false)}>
                                <View style={{alignItems:"center"}}>
                                    <Text style={{alignSelf:"center"}}>
                                        Ask This
                                    </Text>
                                </View>
                            </Button>

                        </View>
                    </Footer>
                </Modal>
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

