import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Details = ({ navigation }) => {

  const book = navigation.getParam('book');

  return(
    <View style={{flex: 1}}>
      <View style={styles.fieldContainer}>  
        <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('EditScreen', {book:book})}}>
          <Icon name="pencil" size={18} color="#0693e3" />
        </TouchableOpacity>
        
        <Text style={styles.label}>Title </Text>
        <Text style={styles.detail}>{book.title}</Text>
    
        <Text style={styles.label}>Author</Text>
        <Text style={styles.detail}>{book.author}</Text>
    
        <Text style={styles.label}>Genre</Text>
        <Text style={styles.detail}>{book.genre}</Text>
        
        <Text style={styles.label}>Publisher</Text>
        <Text style={styles.detail}>{book.publisher}</Text>
      </View>
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  label: {
  fontSize: 14,
  color: '#0693e3',
  },
  detail: {
    paddingTop: 10,
    height: 60, 
    fontSize: 18
  },
  fieldContainer: {
    padding: 10,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});