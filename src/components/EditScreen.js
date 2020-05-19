import React, { Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { updateBookAPI } from "../API/api";
import FloatingLabelInput from "./features/FloatingLabelInput";
import FloatingLabelPicker from "./features/FloatingLabelPicker";

class EditScreen extends Component {
    
    constructor(props) {
        super(props);
        const book = this.props.navigation.getParam('book');

        this.state = {
            title : book.title,
            author: book.author,
            id: book.id,
            genre: book.genre,
            publisher: book.publisher
        }
    }
    
    handleUpdateBook = () => {
        updateBookAPI(this.state);
        this.props.navigation.navigate('BookList');
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
                        onPress={this.handleUpdateBook}>
                        <Text style={styles.btnText}>Update Book</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

export default EditScreen;

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