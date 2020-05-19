import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const BookItem = ({book, deleteBook, navigation}) => {
  return(
    <TouchableOpacity style={styles.bookItem}  onPress={() => {navigation.navigate('Details', {book: book});}}>
      <View style={styles.bookItemView}>
        <Text style={styles.bookItemText}>{book.title}</Text>
        <Icon name="remove" size={20} color="rgba(0,23,41,0.9)" onPress={() => deleteBook(book.id)}></Icon>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  bookItem: {
    padding: 15,
  },
  bookItemText: {
    fontSize: 18,
  },
  bookItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#eee'
  }
})