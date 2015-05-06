var React = require('react-native');
var Profile = require('./profile');
var Repositories = require('./repositories');
var Notes = require('./notes');
var api = require('../utils/api');

var {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} = React;


var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});


class Dashboard extends React.Component{
    makeBackground(btn){
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }

        if(btn === 0){
            obj.backgroundColor = '#48BBEC';
        } else if (btn === 1){
            obj.backgroundColor = '#E77AAE';
        } else {
            obj.backgroundColor = '#758BF4';
        }
        return obj;
    }

    goToProfile() {
        this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        });
    }

    goToRepos() {
        api.getRepos(this.props.userInfo.login)
            .then((res) => {
                this.props.navigator.push({
                    component: Repositories,
                    title: 'Repos Page',
                    passProps: {
                        userInfo: this.props.userInfo,
                        repos: res
                    }
                });
        });
    }

    goToNotes() {
        api.getNotes(this.props.userInfo.login)
        .then((res) => {
            res = res || {};
            this.props.navigator.push({
                component: Notes,
                title: 'Notes',
                passProps: {userInfo: this.props.userInfo, notes: res},
            });
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: this.props.userInfo.avatar_url}}
                    style={styles.image}
                ></Image>

                <TouchableHighlight
                    onPress={this.goToProfile.bind(this)}
                    underlayColor='#88d4f5'
                    style={this.makeBackground(0)}
                >
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.goToRepos.bind(this)}
                    underlayColor='#88d4f5'
                    style={this.makeBackground(1)}
                >
                    <Text style={styles.buttonText}>View Repositories</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.goToNotes.bind(this)}
                    underlayColor='#88d4f5'
                    style={this.makeBackground(2)}
                >
                    <Text style={styles.buttonText}>Take Notes</Text>
                </TouchableHighlight>
            </View>
        );
    }
};


module.exports = Dashboard;