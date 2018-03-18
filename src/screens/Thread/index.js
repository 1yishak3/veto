// @flow
import React, { Component } from "react";
import {
    Image,
    TouchableOpacity,
    Platform,
    Slider,
    Dimensions,
    View as RNView
} from "react-native";

import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    Body,
    View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import Modal from "react-native-modalbox";
import Carousel from "react-native-carousel-view";

import styles from "./styles";
import {connect} from "react-redux"
import {getThread, isLoading, fetchFail} from "../../actions"

const deviceWidth = Dimensions.get("window").width;

type Props = {
    navigation: () => void
};
class Thread extends Component {
    componentDidMount() {
        this.props.getData(this.props.tid)
    }
    state = {
        animationType: "slideInDown",
        open: false,
        value: 0
    };
    props: Props;
    constructor(props: Props) {
        super(props);
        this.state = {
            animationType: "slideInDown",
            open: false,
            value: 0
        };
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
        const data = this.props.data
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

                    {!data.answered ?
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
        )

    }
    renderFollowup=()=>{
        <Content style={{backgroundColor:"#50128d",paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
            <Content style={{backgroundColor:"#ffffff",flexDirection:"column"}}>
                <TouchableOpacity onPress={this.goThread(this.props.data.uid)}>
                    <View style={{padding:13,flexDirection:"row"}}>
                        <Left style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/saurav.png")}
                                style={{alignSelf:"flex-start",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{color:"#ffffff",alignSelf:"flex-start"}}>
                                Ekele
                            </Text>
                        </Left>
                        {/*<Icon active name="md-arrow-round-forward" style={{fontSize: 55}}/>*/}
                        <Text style={{color:"#ffffff", paddingTop:19,fontSize:23, fontWeight:"bold"}}>asked</Text>
                        <Right style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/sankha.png")}
                                style={{alignSelf:"flex-end",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{color:"#ffffff",alignSelf:"flex-end"}}>
                                Ekele2 What
                            </Text>
                        </Right>
                    </View>

                    <View style={{padding:13}}>
                        <Text selectable={true} style={{color:"#ffffff"}} selectionColor={"#d987ff"} >This is a sample text that should be actually an answer</Text>
                    </View>
                </TouchableOpacity>
            </Content>
        </Content>
    }
    renderAnswer=()=>{
        <Content style={{backgroundColor:"#ffffff",paddingLeft:13,paddingRight:13, paddingTop:7, paddingBottom:7}}>
            <Content style={{backgroundColor:"#ffffff",flexDirection:"column"}}>
                <TouchableOpacity onPress={this.goThread(this.props.data.uid)}>
                    <View style={{padding:13,flexDirection:"row"}}>
                        <Left style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/saurav.png")}
                                style={{alignSelf:"flex-start",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{color:"#50128d",alignSelf:"flex-start"}}>
                                Ekele
                            </Text>
                        </Left>
                        {/*<Icon active name="md-arrow-round-forward" style={{fontSize: 55}}/>*/}
                        <Text style={{color:"#50128d", paddingTop:19,fontSize:23, fontWeight:"bold"}}>asked</Text>
                        <Right style={{alignContent:"center",flexDirection:"column"}}>
                            <Thumbnail
                                source={require("../../../assets/Contacts/sankha.png")}
                                style={{alignSelf:"flex-end",width:73, height:73, borderRadius:100}}
                            />
                            <Text style={{color:"#50128d",alignSelf:"flex-end"}}>
                                Ekele2 What
                            </Text>
                        </Right>
                    </View>

                    <View style={{padding:13}}>
                        <Text selectable={true} style={{color:"#50128d"}} selectionColor={"#d987ff"} >This is a sample text that should be actually an answer</Text>
                    </View>
                </TouchableOpacity>
            </Content>
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
        </Content>
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
                <Header
                    style={[
                        styles.headerStyle,
                        this.state.open ? styles.headerModalStyle : styles.headerStyle
                    ]}
                >
                    <Body
                        style={{ flexDirection: "row", justifyContent: "space-around" }}
                    >
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon active name="arrow-back" style={styles.headerIcons} />
                    </Button>
                    </Body>
                </Header>

                <Content
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: "#fff" }}
                >
                    {this.renderQuestion()}
                    <FlatList
                        data={this.props.thread.collection}
                        renderItem={({item})=>this.choose(item)}
                        keyExtractor={(item)=>item.tid}
                    />
                </Content>
                {//The modal has an if to check whether the user is a
                    // politician the question was addressed to or some
                    // other user
                }
                <Modal
                    position="top"
                    entry="top"
                    isOpen={this.state.open}
                    onOpened={() => this.setState({ open: true })}
                    onClosed={() => this.setState({ open: false })}
                    backButtonClose
                    style={styles.modal}
                >
                    <View>
                        <View style={styles.modalContentBox}>
                            <Grid style={{ flex: 10, padding: 20 }}>
                                <Col>
                                    <Button transparent style={styles.dayButton}>
                                        <Icon name="ios-sunny-outline" />
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent style={styles.nightButton}>
                                        <Icon name="ios-moon-outline" style={{ color: "#fff" }} />
                                    </Button>
                                </Col>
                            </Grid>
                        </View>
                        <View style={styles.modalContentBox}>
                            <Grid style={styles.modalContentGrid1}>
                                <Col>
                                    <Text style={styles.modalContentGridText}>
                                        CHOOSE TYPESPACE
                                    </Text>
                                </Col>
                                <Col>
                                    <Button
                                        transparent
                                        iconRight
                                        style={{ marginTop: -5, alignSelf: "center" }}
                                    >
                                        <Text style={{ color: "#FFF" }}>SANS SERIF</Text>
                                        <Icon name="ios-arrow-forward" style={{ fontSize: 28 }} />
                                    </Button>
                                </Col>
                            </Grid>
                        </View>
                        <View>
                            <Grid style={styles.modalContentGrid2}>
                                <Col>
                                    <Text style={styles.modalSmallText}>A</Text>
                                </Col>
                                <Col style={{ alignSelf: "flex-end" }}>
                                    <Text style={styles.modalLargeText}>A</Text>
                                </Col>
                            </Grid>
                            <Slider
                                {...this.props}
                                minimumTrackTintColor="#fff"
                                thumbTintColor="#fff"
                                onValueChange={value => this.setState({ value })}
                            />
                        </View>
                    </View>
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
export default connect(stateToProps)(Thread);
