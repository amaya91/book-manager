import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 10,
      top: !isFocused ?  0: 2,
      fontSize: 14,
      color: '#0693e3',
    };
    return(
      <View style={{ paddingTop: 18 }}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          style={{ height: 40, fontSize: 18, }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

export default FloatingLabelInput;