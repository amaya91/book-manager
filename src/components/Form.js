import React, { Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { addBookAPI } from "../API/api";
import FloatingLabelInput from "./features/FloatingLabelInput";
import FloatingLabelPicker from "./features/FloatingLabelPicker";

class Form extends Component {
  state = {
      title: null,
      author: null,
      genre: null,
      publisher: null,
  };

  handleAddBook = () => {
    if(this.state.title != null && this.state.author != null && this.state.publisher != null && this.state.genre != null ) {
        console.log('FORM IS ADDING');
        addBookAPI(this.state);
        this.props.navigation.navigate('BookList');
        } else 
          Alert.alert('Error', 'Please complete each field', [{
              text: "Ok",
              onPress: () => console.log("Ok Pressed")
            }],
            { cancelable: false }
          );
     
  }
  
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.fieldContainer}>
          <FloatingLabelInput
              label="Title"
              value={this.state.title}
              onChangeText={(value) => this.setState({ title: value })}
          />
          <FloatingLabelInput
              label="Author"
              value={this.state.author}
              onChangeText={(value) => this.setState({ author: value })}
          />
          <FloatingLabelPicker
            label="Genre"
            selectedValue={this.state.genre}
            mode= 'dropdown'
            onValueChange={(itemValue, itemIndex) => this.setState({ genre: itemValue})}
          />
          <FloatingLabelInput
              label="Publisher"
              value={this.state.publisher}
              onChangeText={(value) => this.setState({ publisher: value })}
          />
          <TouchableOpacity 
            style={styles.btn} 
            onPress={this.handleAddBook}>
            <Text style={styles.btnText}>Add Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

export default Form;


const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    backgroundColor: '#0693e3',
    padding: 9,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    height: 60
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  fieldContainer: {
    padding: 10,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});