import React, {Component} from "react";
import {
    Platform,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    AsyncStorage
} from "react-native";
import {connect} from "react-redux";
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    View,
    Spinner,
    Card
} from "native-base";
import * as firebase from "firebase"


import {itemsFetchData, itemsIsLoading, decypher, cypher, setStatus} from "../../actions";
import Question from "../../components/question"
import datas from "./data.json";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const db = firebase.database()
class Home extends Component {
    componentDidMount() {
        this.props.itemLoading(true)
        //veto status would be data about initial login
        //uid
        //lastin ->this obviously gets updated
        //loggedIn
        //poliperson?
        //fast data->

        var uref = db.ref("users/"+this.props.decypher(this.props.huid) + "/")
        uref.once("value").then((data)=>{
            this.props.fetchedUserData(data)
        }).catch((err)=>{
            console.log("Erred: "+err)
        })

    }

    render() {
        if (this.props.isLoading) {
            return (
                <Content style={{alignContent:"center", top:0.5*deviceHeight, }}>
                    <Spinner/>
                </Content>
            )
        } else {
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            >
                                <Icon active name="menu"/>
                            </Button>
                        </Left>
                        <Body>

                        </Body>
                        <Right/>
                    </Header>
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={{backgroundColor: "#fff"}}
                    >

                        <FlatList
                            data={this.props.questions}
                            renderItem={({item})=>
                                <Card>
                                    <Question data={item} navigation={this.props.navigation} answered={item.answered}/>
                                </Card>
                            }
                            keyExtractor={item => item.uid}
                        />
                    </Content>
                </Container>
            );
        }
    }
}

function bindAction(dispatch) {
    return {
        fetchedData: data => dispatch(itemsFetchData(data)),
        itemLoading: bool => dispatch(itemsIsLoading(bool)),
        setStatus: data => dispatch(setStatus(data)),

    };
}

const mapStateToProps = state => ({
    questions: state.homeRed.questions,
    hasErrored: state.homeRed.hasErrored,
    isLoading: state.homeRed.isLoading,
    huid: state.mainRed.huid
});
export default connect(mapStateToProps, bindAction)(Home);
