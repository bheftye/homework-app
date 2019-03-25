import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

class HomeworkItem extends Component {

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  }

  render () {
    const {item} = this.props;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text>Element</Text>
        </View>
      </TouchableOpacity>
    );

  }
}

export default HomeworkItem;