import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, TextInput} from 'react-native';
import BookItem from './features/BookItem';
import { getBooks, deleteBookAPI } from '../API/api';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class BookList extends Component {
  state = {
    text: '',
    isLoading: true, 
    books: []
  }

  arrayholder = [];

  searchData(text) {
      const newData = this.arrayholder.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
 
    this.setState({
      books: newData,
      text: text
      })
  }

  componentDidMount() {
    getBooks()
    .then((json) =>
    {this.setState({books: json},() => {
      this.arrayholder = json;
    });})
    .finally(() => this.setState({ isLoading: false}));
  }

  deleteBook = (id) => {
    deleteBookAPI(id);

    getBooks()
    .then((json) => this.setState({books: json}))
    .finally(() => this.setState({ isLoading: false}));
  }

  updateList = () => {
    getBooks()
    .then((json) => this.setState({books: json}))
    .finally(() => this.setState({ isLoading: false}));
  }
 
  render() {
  return(
    <View style={styles.container}>

        {this.state.isLoading ? <ActivityIndicator />: (
          <>
            <View style={styles.search}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.searchData(text)}
                value={this.state.text}
                placeholder="Search books..." />
              <TouchableOpacity style={styles.icon} onPress={this.updateList}>
                <Icon name="refresh" size={20} color="#0693e3" />
              </TouchableOpacity>
            </View>

            <FlatList 
              key="flatlist"
              style={styles.list}
              data={this.state.books}
              keyExtractor={(item, index)=> index.toString()}
              renderItem={({item, separators}) => <BookItem book={item} navigation={this.props.navigation} deleteBook={this.deleteBook}/>}
            />
            <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Form')}}>
              <Text style={styles.btnText}>  New Book</Text>
            </TouchableOpacity>
          </>
        )}
    </View>
  );
        }
}

export default BookList;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 20,
    marginBottom: 5,
    borderRadius: 10,
  },
  textInput: {
    flexDirection: 'column',
    width: 300
  },
  icon: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1, 
  },
  list: {
    flex:1,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  btn: {
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: '#0693e3',
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
})