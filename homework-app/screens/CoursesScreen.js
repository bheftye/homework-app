import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class CoursesScreen extends React.Component {
  static navigationOptions = {
    title: 'Courses',
  };

  render() {
    return (
      <View>
        <Text>
          Courses.
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(CoursesScreen);
