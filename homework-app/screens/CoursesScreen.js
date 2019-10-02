import React from 'react';
import {connect} from 'react-redux';
import { View, Text, TouchableOpacity, Platform, StyleSheet, FlatList } from 'react-native'
import {Icon} from 'expo';
import Colors from '../constants/Colors';
import CourseItem from '../components/course/CourseItem'

class CoursesScreen extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Courses',
    headerRight: (
      <TouchableOpacity onPress={() => {navigation.navigate('CreateCourse')}}>
        <Icon.Ionicons
          name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
          size={35}
          style={{marginRight: 20}}
          color={Colors.tintColor}
        />
      </TouchableOpacity>
    )
  });

  _renderEmpty = () => {
    return (
      <View style={styles.container}>
        <View style={styles.txtCont}>
          <Text style={styles.txt}>You have zero courses!</Text>
        </View>
      </View>
    );
  }

  _renderItem = ({item}) => {
    return (
      <CourseItem
        item={item}
      />
    );
  }

  _renderList = (courses) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={courses}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

  _keyExtractor = (item, index) => {
    return item.id;
  }

  render() {
    const{courses} = this.props;

    if (courses && courses.length > 0){
      return this._renderList(courses);
    }
    return this._renderEmpty();
  }
}

const mapStateToProps = (state) => ({
  courses: state.get('course').get('courses')
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#aaaaaa'
  },
  add:{
    marginLeft: -5
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
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

export default connect(mapStateToProps, {})(CoursesScreen);
