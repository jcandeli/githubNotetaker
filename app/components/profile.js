var React = require('react-native');
var Badge = require('./badge');
var Separator = require('./helpers/separator');

var {
    Text,
    View,
    StyleSheet,
    ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends React.Component{
    getRowTitle(item) {
        return item.replace('_', ' ');
    };

    render() {
        var userInfo = this.props.userInfo;
        var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
        var list = topicArr.map((item, index) => {
            if(!userInfo[item]) {
                return <View key={index} />
            } else {
                return (
                    <View key={index}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}>{this.getRowTitle(item)}</Text>
                            <Text style={styles.rowContent}>{userInfo[item]}</Text>
                        </View>

                        <Separator />
                    </View>
                );
            }
        });

        return (
            <ScrollView style={styles.container}>
                <Badge userInfo={userInfo} />
                {list}
            </ScrollView>
        );
    };
};

module.exports = Profile;