import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CreateHomeworkScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Homework Task',
  };

  render() {
    return (
      <View>
        <Text>
          Create Homework Task!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
