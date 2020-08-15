/* all routing setup go here */

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
// import Login from './screens/login/index';
import HomeScreen from './screens/app-home/index';

// const AuthNavigator = createStackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: () => {
//       return {
//         headerShown: false,
//       };
//     },
//   },
// });

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});

// export const AppAuthContainer = createAppContainer(AuthNavigator);
export const AppMainContainer = createAppContainer(AppNavigator);
