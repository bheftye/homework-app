import React from 'react';
import {connect} from 'react-redux';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeworkItem from '../components/home/HomeworkItem'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _onPressItem = (id) => {
    //Redirect to view with current homework.
  }

  _renderItem = ({item}) => {
    return (
      <HomeworkItem
        item={item}
        id={item.id}
        onPressItem={this._onPressItem}
      />
    );
  }

  render() {
    const {tasks, loading} = this.props;
    if (!tasks && tasks.length > 0){
      return this._renderList(tasks);
    }
    if (loading){
      return this._renderLoading();
    }
    return this._renderEmpty();
  }

  _renderList = (tasks) => {
    return (
      <FlatList
        data={tasks}
        renderItem={this._renderItem}
      />
    );
  }

  _renderEmpty = () => {
    return (
      <View style={styles.container}>
        <View style={styles.txtCont}>
          <Text style={styles.txt}>You have zero homework!</Text>
        </View>
      </View>
    );
  }

  _renderLoading = () => {
    return (
      <View style={styles.container}>
        <View style={styles.txtCont}>
          <Text style={styles.txt}>Loading all your homework!</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.get('task').get('source'),
  loading: state.get('task').get('loading')
})

export default connect(mapStateToProps, {})(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txtCont: {
    flex:1,
    justifyContent: 'center'
  },
  txt: {
    textAlign:'center',
    fontSize: 22,
  }
});
