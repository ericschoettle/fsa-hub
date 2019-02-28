import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from '../screens/SettingsScreen';
import CreateEventScreen from "../screens/CreateEventScreen"
import ProfileScreen from '../screens/ProfileScreen';
import PreviewScreen from "../screens/PreviewScreen";
import SandboxScreen from '../screens/SandboxScreen';
import SubcategoriesScreen from '../screens/SubcategoriesScreen';
import ContentScreen from "../screens/ContentScreen";
import BlueprintScreen from "../screens/BlueprintScreen";
import MessagesListScreen from '../screens/MessagesListScreen';
import PaymentScreen from "../screens/PaymentScreen";
import ExperienceScreen from "../screens/ExperienceScreen";
import AchievementScreen from "../screens/AchievementScreen"


const AuthStackNavigator = createStackNavigator({
    Welcome: { screen: WelcomeScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
});

const FeedNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    BlueprintScreen: { screen: BlueprintScreen },
    PaymentScreen: { screen: PaymentScreen },
    Subcategories: { screen: SubcategoriesScreen },
    Content: { screen: ContentScreen },
    SandboxScreen: { screen: SandboxScreen },
    Profile: { screen: ProfileScreen },
    ExperienceScreen: { screen: ExperienceScreen },
    AchievementScreen: { screen: AchievementScreen }
  });

const ChatStackNavigator = createStackNavigator({
    MessagesList: { 
      screen: MessagesListScreen, 
      navigationOptions: ({ navigation }) => ({
        title: 'Messages',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Ionicons name="md-menu" size={32} />
                </View>
            </TouchableOpacity>
        ),
      }),
    },
    Chat: { screen: ChatScreen }
  });

const EventNavigator = createStackNavigator({
  CreateEventScreen: {
    screen: CreateEventScreen,
    navigationOptions: ({ navigation }) => ({
        title: 'Preview: Create Event',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Ionicons name="md-menu" size={32} />
                </View>
            </TouchableOpacity>
        ),
    }),
},
})

const PreviewNavigator = createStackNavigator({
  PreviewScreen: {
    screen: PreviewScreen,
    navigationOptions: ({ navigation }) => ({
        title: 'Preview: Dashboard',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Ionicons name="md-menu" size={32} />
                </View>
            </TouchableOpacity>
        ),
    }),
},
})



// const AppTabNavigator = createBottomTabNavigator(
//     {
//       Home: {
//         screen: FeedNavigator,
//         navigationOptions: {
//           tabBarLable: 'Home',
//           tabBarIcon: ({ tintColor }) => (
//             <Ionicons name="ios-home" size={28} color={tintColor} />
//           ),
//         },
//       },
//       // Profile: {
//       //   screen: ProfileScreen,
//       //   navigationOptions: {
//       //     tabBarIcon: ({ tintColor }) => (
//       //       <Entypo name="user" size={28} color={tintColor} />
//       //     ),
//       //   },
//       // },
//     },
//     {
//       tabBarOptions: {
//         activeTintColor: '#6200EE',
//         inactiveTintColor: '#151515',
//       },
//     },
//   );

const AppDrawerNavigator = createDrawerNavigator({
    // Home: AppTabNavigator,
    Home: FeedNavigator,
    'Create Event': EventNavigator,
    'Logout': { screen: SettingsScreen },
    // 'Preview: Messages': ChatStackNavigator,
    // 'Preview: Dashboard': PreviewNavigator
});

// const AppNavigator = createSwitchNavigator({
//     // AuthLoading: AuthLoadingScreen,
//     // Auth: AuthStackNavigator,
//     App: AppDrawerNavigator,
//     // Blueprint: BlueprintScreen,
//     // Knowledge: KnowledgeStackNavigator,
// });

// Drawer navigator has two nested navigators inside - that's why the double white space. 

export default createAppContainer(AppDrawerNavigator);