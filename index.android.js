/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  TouchableNativeFeedback,
  View
} from 'react-native';
const uuidV4 = require('uuid/v4');
import createAMessage from './myrealm';

export default class realmExample extends Component {

  insertRealmRecs(){
    //A simple insert.
    // If you add a DB listener to the data entry it will take forever to update the UI.
    for (var i = 0; i < 200; i++) {
      createAMessage({
        type: 'Public',
        uuid: uuidV4(),
        body: "Test insertion Ui Freeze",
        sid: uuidV4()
      });
    }
  }

  showAlert(){
    Alert.alert(
      'Took time to display!',
      'Noticeable Lag. Inserting just a few records.',
      [
        {
          text: 'OK', onPress: () => {

          }
        },
      ],
      {
        cancelable: false
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>

        <Text style={styles.instructions}>
          Tap insert records then immediately tap the Demostart lag button,{'\n'}
        </Text>
        <TouchableNativeFeedback onPress={this.insertRealmRecs.bind(this)}>
          <View style={styles.buttonWrapper}>
            <Text  style={styles.text}>Tap to Insert Records</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.showAlert.bind(this)}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.text}>Demonstrate Lag.</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonWrapper:{
    backgroundColor: '#94bf30',
    elevation:1,
    paddingLeft:16,
    paddingRight:16,
    paddingTop:12,
    paddingBottom:12,
    borderRadius:24,
    marginTop:20,
    flexDirection:'row'
  },
  text:{
    color: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('realmExample', () => realmExample);
