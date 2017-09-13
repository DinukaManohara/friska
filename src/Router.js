import React from 'react';

import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Communication from './Screens/Communication.js';
import Notifications from './Screens/Notifications.js';
import Health from './Screens/Health.js';
import Graphs from './Screens/Graphs.js';
import Profile from './Screens/Profile.js';

export const Tabs = TabNavigator(
  {
    Communication: {
      screen: Communication,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'bubble'} size={25} color={ tintColor } />
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'bell'} size={25} color={ tintColor } />
      },
    },
    Health: {
      screen: Health,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'heart'} size={25} color={ tintColor } />
      },
    },
    Graphs: {
      screen: Graphs,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'chart'} size={25} color={ tintColor } />
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'user'} size={25} color={ tintColor } />
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'rgba(102, 0, 204, 0.8)',
      inactiveTintColor: 'rgba(0, 0, 0, 0.85)',
      showLabel: false,
      showIcon: true,
      tabStyle: { padding: 10, backgroundColor: 'rgba(255, 255, 255, 0.95)', },
      iconStyle: { height: 26, width: 26, },
      style: { backgroundColor: 'rgba(255, 255, 255, 0.95)', }
    },
  }
);
