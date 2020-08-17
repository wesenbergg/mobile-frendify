import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer'

import IndexScreen from './src/screens/Index'
import LoginScreen from './src/screens/Login'
import SignupScreen from './src/screens/Signup'
import DiscoverScreen from './src/screens/Discover'
import ProfileScreen from './src/screens/Profile'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Discover: DiscoverScreen,
    Index: IndexScreen,
    Profile: ProfileScreen,
  })
})

export default createAppContainer(switchNavigator)

// const App = createAppContainer(switchNavigator)

// export default () => {
//   return (
//     <App />
//   )
// }
