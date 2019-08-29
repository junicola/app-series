import {createAppContainer, createStackNavigator} from 'react-navigation';
import LoginScreen from './src/pages/LoginScreen';

const appNavigator = createStackNavigator ({
  'Login': {
    screen: LoginScreen,
    navigationOptions:{
      title:'Bem Vindo',
    }
  },
},{
  defaultNavigationOptions:{
    title: "Minhas series",
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#8641a6',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30,
    }
  }
});

const appContainer = createAppContainer(appNavigator);

export default appContainer;