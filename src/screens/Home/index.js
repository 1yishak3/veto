import React, {Component} from "react";
import {
    Platform,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    View as RNView
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



import {itemsFetchData} from "../../actions";
import Question from "../../components/question"
import datas from "./data.json";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;

class Home extends Component {
    componentDidMount() {
        this.props.fetchData([{
            answered:false,
            uid:"foobar6",
            food:"burger"
        },{
            answered:false,
            uid:"foobar66",
            food:"burger"
        },{
            answered:false,
            uid:"foobar666",
            food:"burger"
        },{
            answered:false,
            uid:"foobar6666",
            food:"burger"
        },{
            answered:false,
            uid:"foobar66666",
            food:"burger"
        }]);
    }

    render() {
        if (this.props.isLoading) {
            return <Spinner/>;
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
        fetchData: url => dispatch(itemsFetchData(url))
    };
}

const mapStateToProps = state => ({
    questions: state.homeRed.questions,
    hasErrored: state.homeRed.hasErrored,
    isLoading: state.homeRed.isLoading
});
export default connect(mapStateToProps, bindAction)(Home);
