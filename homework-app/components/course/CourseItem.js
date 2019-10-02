import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

class CourseItem extends Component {

  render () {
    const {item} = this.props
    return (
      <View key={item.key}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{...styles.circle, backgroundColor: item.color}}/>
        </TouchableOpacity>
      </View>


    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  name: {fontSize: 18},
  circle: {width: 30, height: 30, borderRadius: 50}
})

export default CourseItem