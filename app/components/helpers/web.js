var React = require('react-native');

var {
    View,
    WebView,
    StyleSheet
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6ef',
        flexDirection: 'column'
    }
});

class Web extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <WebView url={this.props.url} />
            </View>
        )
    }
};

Web.propTypes = {
    url: React.PropTypes.string.isRequired
}

module.exports = Web;
