import React, {Component} from "react";
import {Image, TouchableOpacity,FlatList} from "react-native";

import {NavigationActions} from "react-navigation";
import {connect} from "react-redux";
import {
    Container,
    Content,
    Text,
    Icon,
    ListItem,
    Thumbnail,
    View,
    Input,
    Item
} from "native-base";

import styles from "./style";
import {filterOwnPolipeople} from "../../actions";

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: "Login"})]
});

class SideBar extends Component {
    goPoliperson=(uid:string)=>{
        this.props.navigation.navigate("Profile")
    }
    renderPerson=(person)=> {
        return (
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                backgroundColor:"#340679",
                flexDirection:"column",
                }}>
                <View style={{paddingTop:13, paddingLeft:23}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                        <Thumbnail style={{height:100, width:100, borderRadius:100, paddingLeft:13}} source={require("../../../assets/Contacts/sankha.png")}/>
                        <Text style={{paddingLeft:13, paddingTop:28}}>
                            User's Name Here
                        </Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={{padding:23}}>
                        Bio Here
                    </Text>
                </View>
            </View>
        )
    }
    renderSearch=()=>{
        return (
            <View searchBar style={{flex:3}}>
                <Item style={{paddingLeft:23, paddingRight:23}}>
                    <Icon name="ios-search"/>
                    <Input placeholder={"Search Your Polipeople"} onChangeText={this.props.filter}/>
                </Item>
            </View>
        )
    }


    renderPoliperson= ({item})=>{
        return (
            <TouchableOpacity onPress={()=>this.goPoliperson(item.uid)}
            >
                <View style={styles.poliperson}>
                   <Thumbnail source={require("../../../assets/Contacts/sanket.png")}
                   style={styles.polipic}/>
                    <Text style={styles.politext}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <Container >

                <Content style={styles.drawerContent}>
                    <View style={{flex:4}}>
                        {this.renderPerson(this.props.profile)}
                    </View>

                        {this.renderSearch()}

                    <View style={{paddingTop:13, flex:6}}>
                        <FlatList
                            data={this.props.filteredList}
                            renderItem={this.renderPoliperson}
                            keyExtractor={poliperson => poliperson.uid}
                        />
                    </View>
                </Content>
                <View style={styles.logoutContainer}>
                    <View style={styles.logoutbtn} foregroundColor={"white"}>
                        <TouchableOpacity style={{height:43,
                            width:250,

                            alignItems:"center",
                            backgroundColor:"#ffffff",
                            borderRadius:23}}>
                            <Text style={{paddingTop:7, color:"#340679"}}>Add Polipeople</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container>
        );
    }
}

function sideActions(dispatch) {
    return {
        filter: string => dispatch(filterOwnPolipeople(string))

    };
}

const sideProps = state => ({
    filteredList: state.sideRed.filteredList,
    isLoading: state.sideRed.isLoading,
    profile: state.settingsRed.profile
});


export default connect(sideProps, sideActions)(SideBar);
