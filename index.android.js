/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import icons from 'native-base/src/basic/Icon/NBIcons';
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  Icon,
  ListItem,
  Text,
  View,
  Input,
} from 'native-base';

console.disableYellowBox = true;
const iconNames = Object.keys(icons);

export default class NativeBaseIconViewer extends Component {
  state = { searchText: '' };

  handleSearchTextChange = (searchText) => this.setState({ searchText });

  render() {
    const { searchText } = this.state;
    const filteredIconNames = searchText.length ?
      iconNames.filter((iconName) => iconName.includes(searchText)) :
      iconNames;

    return (
      <Container>
        <Header>
          <Input placeholder="Search" style={styles.searchInput} value={searchText} onChangeText={this.handleSearchTextChange}/>
        </Header>
        <Content>
          {filteredIconNames.map((iconName) =>
            <ListItem key={iconName}>
              <Icon name={iconName}/>
              <View style={styles.iconName}>
                <Text>{iconName}</Text>
              </View>
            </ListItem>
          )}
        </Content>
      </Container>
    );
  }
}

const styles = {
  searchInput: {
    flex: 1,
    backgroundColor: 'white'
  },
  iconName: {
    marginLeft: 20
  }
};

AppRegistry.registerComponent('NativeBaseIconViewer', () => NativeBaseIconViewer);
