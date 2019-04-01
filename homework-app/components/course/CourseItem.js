import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

class CourseItem extends Component {

  render () {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container}>
          <View style={{...styles.square, backgroundColor: item.color}}></View>
          <Text styles={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  container: {flex:1, flexDirection:'row', height:80},
  square: {flex:1,width: 25, height: 25, borderRadius:50, paddingRight: 15},
  text: {flex:4,fontSize: 22}
});

export default CourseItem;