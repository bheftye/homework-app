import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Picker, TextInput, Button } from 'react-native'
import { setText, setColor , createCourse, restartCreated} from '../actions/course'

class CourseCreateScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Course',
  }

  componentDidMount(){
    this.props.restartCreated();
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
    if (newProps.created && !this.props.created){
      this.props.navigation.navigate('Courses');
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.subContainerForm}>
          <TextInput
            value={this.props.name}
            style={styles.text}
            placeholder='Course Name'
            onChangeText={(text) => this.props.setText(text)}
          />
          <Picker
            selectedValue={this.props.color}
            style={{height: 25}}
            onValueChange={(itemValue, itemIndex) => this.props.setColor(itemValue)}
          >
            <Picker.Item label="Orange" value="#E82C0C"/>
            <Picker.Item label="Red" value="#FF3836"/>
            <Picker.Item label="Purple" value="#E82681"/>
          </Picker>
        </View>
        <View style={styles.subContainer}>
          <Button
            title='Create course'
            style={styles.btn}
            onPress={() => this.props.createCourse()}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.get('course').get('courseForm').get('name'),
  color: state.get('course').get('courseForm').get('color'),
  created: state.get('course').get('created')
})

export default connect(mapStateToProps, {setText, setColor, createCourse, restartCreated})(CourseCreateScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#fff',
  },
  subContainerForm: {flex:1, justifyContent:'center'},
  subContainer: {flex:1, justifyContent:'center'},
  btn:{marginTop: 15},
})
