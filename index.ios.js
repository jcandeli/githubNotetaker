/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/components/main');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;


var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});


class githubNotetaker extends React.Component{
  render() {
    return (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            component: Main,
            title: 'Github Notetaker',
        }}
    />
    );
  }
};

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
