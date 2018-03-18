import React, { Component } from "react";
import { Image } from "react-native";
import { Icon, Button, Left, Right, Body, Header } from "native-base";

import styles from "./styles";
// const headerLogo = require("../../../assets/header-logo.png");

class CustomHeader extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Header hasTabs={this.props.hasTabs}>
          { this.props.which===0 ?
              <Left>
                  <Button transparent
                          onPress={() => navigation.navigate("DrawerOpen")}>
                      <Icon active name="menu"/>
                  </Button>
              </Left>:
              <Left>
                  <Button transparent
                          onPress={() => navigation.goBack()}>
                      <Icon active name="md-arrow-round-back"/>
                  </Button>
              </Left>
          }
        <Body>

        </Body>
        <Right />
      </Header>
    );
  }
}

export default CustomHeader;
