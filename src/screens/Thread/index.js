//Test page and add FAB that leads to FollowUp/Answer Page
//Create Ask Page and PoliPeople List page
//Consider making the the profile answered unansweres tabs actual
//footer tabs since they are already footer material

//Done with UI
//Backend Starts


import React, { Component } from "react";
import {
    Image,
    TouchableOpacity,
    Platform,
    Slider,
    Dimensions,
    FlatList,
    TextInput,
    Modal

} from "react-native";
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    Body,
    View,
    Left,
    Right,
    Thumbnail,
    Fab,
    Badge,
    Footer,
    ListItem,
    Input

} from "native-base";



import styles from "./styles";
import {connect} from "react-redux"
import {getThread, isLoading, fetchFail} from "../../actions"

const deviceWidth = Dimensions.get("window").width;

type Props = {
    navigation: () => void
};
class Thread extends Component {
    componentDidMount() {
        //async fetch from Firebase here
        this.props.getThread({collection:[{colid:"xyz1",answer:true},{colid:"xyz",followup:true}],question:{}})
    }
    state = {
        animationType: "slideInDown",
        open: false,
        value: 0,
        activeModal:false,
        lines:20,
        height:0
    };
    props: Props;
    constructor(props: Props) {
        super(props);
        this.state = {
            animationType: "slideInDown",
            open: false,
            value: 0,
            activeModal:false,
            lines:1,
            height:0
        };
    }
    adjustLines(height:any){
        const newLines=2+((height-40)/16.5)
        if(newLines>1) {
            this.setState({...this.state, lines: newLines})
        }

    }
    modalO() {
        this.setState({ open: true });
    }

    modalX() {
        this.setState({ open: false });
    }
    renderModal=()=>{

    }
    renderQuestion=()=>{
        const data = this.props.thread
        return (
            <Content style={{backgroundColor:"#50128d",paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
                <Content style={{backgroundColor:"#50128d",flexDirection:"column"}}>

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

                        <Text style={{paddingTop:19,fontSize:23, fontWeight:"bold"}}>asked</Text>
                        <Right style={{alignContent:"center",flexDirection:"column"}}>
                            <View badge >
                                <Thumbnail
                                    source={require("../../../assets/Contacts/sankha.png")}
                                    style={{alignSelf:"flex-end",width:73, height:73, borderRadius:100}}
                                />
                                <Badge
                                    style={{backgroundColor:"#0000ff",
                                        bottom:0,
                                        right:0,
                                        position:"absolute",
                                        alignSelf:"flex-end",
                                    }}>
                                    <Text style={{alignSelf:"center",fontSize:13,color:"#fff"}}>10</Text></Badge>
                            </View>
                            <Text style={{alignSelf:"flex-end"}}>
                                Ekele2 what
                            </Text>
                        </Right>
                    </View>

                    <View style={{padding:13}}>
                        <Text selectable={true} selectionColor={"#d987ff"} >This is a sample text that should be actually a question</Text>
                    </View>


                    {!this.props.thread.answered ?
                        <View style={{padding:13,flexDirection:"row"}}>

                            <Left>
                                <TouchableOpacity>
                                    <Icon active name="md-arrow-round-down" style={{color:"#b60000",fontSize:(0.13*Dimensions.get("window").width)}}/>
                                </TouchableOpacity>
                            </Left>


                            <Right>
                                <TouchableOpacity>
                                    <Icon active name="md-arrow-round-up" style={{color:"#0000ff",fontSize:(0.13*Dimensions.get("window").width)}}/>
                                </TouchableOpacity>
                            </Right>

                        </View>
                        :
                        null
                    }
                </Content>
            </Content>
        )

    }
    renderFollowup=()=>{
        return( <Content style={{backgroundColor:"#50128d",paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
                <Content style={{backgroundColor:"#50128d",flexDirection:"column"}}>

                    <View style={{padding:13,flexDirection:"row"}}>
                        <View style={{alignSelf:"flex-start",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/saurav.png")}
                                style={{alignSelf:"flex-start",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{color:"#ffffff",alignSelf:"flex-start"}}>
                                Ekele What
                            </Text>
                        </View>
                        <View>
                            <Text style={{alignSelf:"flex-start",color:"#ffffff", paddingTop:13,fontSize:23, fontWeight:"bold"}}>followed up</Text>
                        </View>
                        {/*<Icon active name="md-arrow-round-forward" style={{fontSize: 55}}/>*/}


                    </View>

                    <View style={{padding:13}}>
                        <Text selectable={true} style={{color:"#ffffff"}} selectionColor={"#d987ff"} >This is a sample text that should be actually a followup</Text>
                    </View>

                </Content>
            </Content>
        )
    }

    renderAnswer=()=>{
        return ( <Content style={{backgroundColor:"#ffffff",paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
                <Content style={{backgroundColor:"#ffffff",flexDirection:"column"}}>

                    <View style={{padding:13,flexDirection:"row"}}>
                        <View style={{alignSelf:"flex-start",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/sankha.png")}
                                style={{alignSelf:"flex-start",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{color:"#50128d",alignSelf:"flex-start"}}>
                                Ekele2 What
                            </Text>
                        </View>

                        <View>
                            <Text style={{paddingTop:13,alignSelf:"center",color:"#50128d",fontSize:23, fontWeight:"bold"}}>answered</Text>
                        </View>
                    </View>

                    <View style={{padding:13}}>
                        <Text selectable={true} style={{color:"#50128d"}} selectionColor={"#d987ff"} >This is a sample text that should be actually an answer</Text>
                    </View>

                </Content>
                <View style={{padding:13,flexDirection:"row"}}>

                    <Left>
                        <TouchableOpacity>
                            <Icon active name="md-arrow-round-down" style={{color:"#b60000",fontSize:(0.13*Dimensions.get("window").width)}}/>
                        </TouchableOpacity>
                    </Left>


                    <Right>
                        <TouchableOpacity>
                            <Icon active name="md-arrow-round-up" style={{color:"#0000ff",fontSize:(0.13*Dimensions.get("window").width)}}/>
                        </TouchableOpacity>
                    </Right>

                </View>
            </Content>
        )
    }
    choose(item){
        if(item.followup){
            return this.renderFollowup(item)
        }else if(item.answer){
            return this.renderAnswer(item)
        }
        return null
    }

    render() {
        return (
            <Container>
                {this.state.activeModal ? null :
                    <Header
                        style={[
                            styles.headerStyle,
                            this.state.open ? styles.headerModalStyle : styles.headerStyle
                        ]}
                    >
                        <Left
                            style={{
                                paddingLeft: 13,
                                paddingTop: 5,
                                alignSelf: "flex-start",
                                flexDirection: "row"
                            }}
                        >
                            <Button transparent
                                    onPress={() => this.props.navigation.goBack()}>
                                <Icon active name="arrow-back"
                                      style={styles.headerIcons}/>
                            </Button>
                        </Left>
                    </Header>
                }
                <Container>
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: "#fff" }}
                    >

                        {this.renderQuestion()}
                        <FlatList
                            data={this.props.thread.collection}
                            renderItem={({item})=>this.choose(item)}
                            keyExtractor={(item)=>item.colid}
                        />
                    </Content>
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
                    }}

                >
                    <Content style={styles.modal}>
                        <TextInput
                            autoGrow
                            autoCapitalize={"sentences"}
                            returnKeyType={"next"}
                            multiline={true}
                            numberOfLines={20}
                            placeholder={this.props.user===this.props.thread.politician ?
                                "Post your answer" : "Post your follow up."}
                            onContentSizeChange={(e)=>this.adjustLines(e.nativeEvent.contentSize.height)}
                            underlineColorAndroid={"#fff"}
                            style={{width:"100%", borderColor:"#50128d"}}
                        >
                        </TextInput>
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

                            { this.props.user === this.props.thread.politician
                                ?
                                <Button  style={{justifyContent:"center",
                                    backgroundColor:"#0000ff",
                                    width:"50%",
                                    height:"100%"}} onPress={()=>this.renderModal(false)}>
                                    <View style={{alignItems:"center"}}>
                                        <Text style={{alignSelf:"center"}}>
                                            Post Answer
                                        </Text>
                                    </View>
                                </Button>:
                                <Button  style={{justifyContent:"center",
                                    backgroundColor:"#0000ff",
                                    width:"50%",
                                    height:"100%"}} onPress={()=>this.renderModal(false)}>
                                    <View style={{ alignItems:"center"}}>
                                        <Text style={{alignSelf:"center"}}>
                                            Post Followup
                                        </Text>
                                    </View>
                                </Button>
                            }
                        </View>
                    </Footer>
                </Modal>
            </Container>
        );
    }
}

function bindAction(dispatch){
    return {
        getThread: (tid:string)=>dispatch(getThread(tid)),
        fetchFail: (error:any)=>dispatch(fetchFail(error)),
        isLoading: (bool:Boolean)=>dispatch(isLoading(bool))
    }
}
const stateToProps=(state)=>{
    return{
        tid: state.threadRed.tid,
        thread:state.threadRed.thread,
        isLoading:state.threadRed.isLoading
    }
}
export default connect(stateToProps, bindAction)(Thread);
