import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  TextInput,
} from 'react-native';
import {
  nameValidator,
  emailValidator,
  passwordValidator,
} from '../../global/utils/validator';

class index extends Component {
  render() {
    return (
      <View>
        <Text> Login Screen </Text>
      </View>
    );
  }
}

export default index;
