import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

class FloatingLabelPicker extends Component {
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
          <Picker
            {...props}
            style={{ height: 40, fontSize: 18, }}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            mode= 'dropdown'
          >
            <Picker.Item label="Select a genre"/>
            <Picker.Item label="Fiction" value="Fiction" />
            <Picker.Item label="Nonfiction" value="Nonfiction" />
            <Picker.Item label="Fantasy" value="Fantasy" />
            <Picker.Item label="Mystery" value="Mystery" />
          </Picker>
        </View>
      );
    }
}

export default FloatingLabelPicker;