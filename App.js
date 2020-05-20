import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from 'react-native';
import BookList from './src/components/BookList';
import Details from './src/components/Details';
import Form from './src/components/Form';
import EditScreen from './src/components/EditScreen';
// import Login from './src/components/Login';

console.disableYellowBox = true;

function User() {
  return (
    //User static image saved in android/asset
    <Image source={{uri: 'asset:/IMG_5206.JPG'}} style={{ width: 75, height: 75, borderRadius: 100/2, marginLeft: 10}}/>
  );
}

const AppNavigator = createStackNavigator(
  {
    BookList: {
      screen: BookList,
      navigationOptions: {
        headerLeft: <User />,
        headerTitle: "Booklist",
      }
    },
    Details: {
      screen: Details,
      navigationOptions: {
        headerTitle: "Details",
      }
    },
    Form: {
      screen: Form,
      navigationOptions: {
        headerTitle: "New Book",
      }
    },
    EditScreen: {
      screen: EditScreen,
      navigationOptions: {
        headerTitle: "Edit Book",
      }
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitleVisible: true,
      mode: "card",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: '#0693e3',
        height: 100,
      }, 
      headerTintColor: '#fff',
    },
  },
);

const App = createAppContainer(AppNavigator);

export default App;