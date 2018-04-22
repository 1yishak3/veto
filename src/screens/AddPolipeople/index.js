import React, { Component } from "react";
import { Image, Platform, FlatList, ListView} from "react-native";
import {
    Container,
    Header,
    Content,
    Text,
    Left,
    Right,
    Body,
    Button,
    Icon,
    View,
    Item,
    ListItem,
    Input,
    List,
    SwipeRow,
    Thumbnail,
    Badge
} from "native-base";
import {connect} from "react-redux"
import {Grid, Col,} from "react-native-easy-grid"
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import styles from "./styles";
import {getProxPeople, isLoadingAround, isLoadingSearch, searchSuccess, aroundSuccess} from "../../actions"

const headerLogo = require("../../../assets/header-logo.png");

class AddPolipeople extends Component {
    componentDidMount(){
        this.props.getProxPeople(this.props.user.details.state)
    }
    state={
        searchTerm:""
    }
    ds:any
    props:Props
    constructor(props:Props){
        super(props);
        this.state={
            searchTerm:""
        }
        this.ds=new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    }

    render() {
        const navigation = this.props.navigation;
        const dss=this.ds
        return (
            <Container style={{backgroundColor:"#fff"}}>
                <Header hasTabs style={{flexDirection:"row"}}>
                    <View style={{width:"25%"}}>
                        <Button
                            transparent
                            onPress={() => navigation.goBack()}
                        >
                            <Icon active style={{color:"#fff"}} name="md-arrow-round-back" />
                        </Button>
                    </View>
                    <View searchBar style={{width:"85%"}}>
                        <View style={{width:"100%"}}>
                            <Item style={{paddingLeft:13, paddingRight:13}}>
                                <Icon name="ios-search"/>
                                <Input placeholderColor={"#fff"} placeholder={"Search" +
                                " for Polipeople"} onChangeText={this.search}/>
                            </Item>
                        </View>
                    </View>
                </Header>
                {
                    this.state.searchTerm==="" ?
                        <View style={{backgroundColor:"#fff"}}>
                            <ListItem style={{justifyContent:"center"}}>
                                <Text style={{color:"#000", alignSelf:"center"}}>Around You</Text>
                            </ListItem>

                            <FlatList
                                data={this.props.poliAround}
                                renderItem={({item})=>
                                            <SwipeRow
                                                leftOpenValue={75}
                                                rightOpenValue={0}
                                                style={{height:75}}
                                                body={
                                                    <View style={{flexDirection:"row"}}>
                                                        <Left style={{paddingLeft:13, flex:1}}>
                                                            <Thumbnail
                                                                source={require("../../../assets/Contacts/sanket.png")}
                                                                style={{height:"100%", width:"100%"}}
                                                            />
                                                        </Left>
                                                        <Body style={{paddingLeft:13,alignItems:"flex-start", flex:5}}>
                                                            <Text style={{color:"#000"}}>
                                                                Jemal Ahmed
                                                            </Text>
                                                            {//can have more
                                                                // stuff
                                                                // here like
                                                                // BIO
                                                            }
                                                        </Body>
                                                        <Right style={{alignItems:"flex-end", flex:1}}>
                                                            <Badge primary>
                                                                <Text>2.7</Text>
                                                            </Badge>
                                                        </Right>
                                                    </View>
                                                }
                                                left={

                                                    <Button full style={{backgroundColor:"#0000ff", width:"100%", height:75}}>
                                                        <Icon name={"md-add"}/>
                                                    </Button>

                                                }
                                            />
                                }
                                keyExtractor={(item)=>item.uid}


                            />
                        </View>
                        :
                        <View>
                            <ListItem>
                                <Text style={{color:"#000", alignSelf:"center"}}>From Your Search</Text>
                            </ListItem>
                            <FlatList
                                data={this.props.searchResults}
                                renderItem={({item})=>{
                                    return(
                                        <ListItem>
                                        </ListItem>
                                    )
                                }
                                }
                                keyExtractor={(item)=>item.uid}
                            />
                        </View>
                }
            </Container>
        );
    }
}
function mapActions(dispatch){
    return{
        aroundSuccess:(people:any)=>dispatch(aroundSuccess(people)),
        searchSuccess:(people:any)=>dispatch(searchSuccess(people)),
        isLoadingAround:(bool:Boolean)=>dispatch(isLoadingAround(bool)),
        isLoadingSearch:(bool:Boolean)=>dispatch(isLoadingSearch(bool)),
        getProxPeople:(state:string)=>dispatch(getProxPeople(state))
    }
}
const mapStateToProps= (state)=>{
    return{
        poliAround: state.adpRed.poliAround,
        searchResults: state.adpRed.searchResults,
        isLoadingAround: state.adpRed.isLoadingAround,
        isLoadingSearch: state.adpRed.isLoadingSearch,
        erred: state.adpRed.erred,
        error:state.adpRed.error
    }
}
export default connect(mapStateToProps, mapActions)(AddPolipeople);
