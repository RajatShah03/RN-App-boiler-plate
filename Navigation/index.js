import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import NotificationInactiveIcon from '../Assets/Icons/nav/light/alert.svg';
import NotificationActiveIcon from '../Assets/Icons/nav/light/alert_active.svg';
import ProfileIcon from '../Assets/Icons/nav/light/profile.svg';
import FeedInactiveIcon from '../Assets/Icons/nav/light/vera.svg';
import FeedActiveIcon from '../Assets/Icons/nav/light/vera_active.svg';
import {
  AddDetailsScreen,
  AuthScreen,
  FeedScreen,
  NotificationsScreen,
  OBScreen1,
  OBScreen2,
  OBScreen3,
  PostScreen,
  PreviewScreen,
  ProfileFormScreen,
  ProfileScreen,
  SearchScreen,
  SettingsScreen,
  TagScreen,
  UploadScreen,
} from '../Screens';
import styles from './styles';

/**
 * @param {*} navigation
 * @param {*} focused
 * @returns IconComponent to be rendered on tabBar
 */
const renderTabIcons = (navigation, focused) => {
  const {routeName} = navigation.state;
  let iconComponent = null;
  if (routeName === 'Feed') {
    iconComponent = focused ? <FeedActiveIcon /> : <FeedInactiveIcon />;
  } else if (routeName === 'Notifications') {
    iconComponent = focused ? (
      <NotificationActiveIcon />
    ) : (
      <NotificationInactiveIcon />
    );
  } else if (routeName === 'Me') {
    iconComponent = <ProfileIcon />;
  }
  return iconComponent;
};

/**
 * @Stack
 * contains screens for @auth flow
 */
const AuthStack = createStackNavigator(
  {
    authOpt: {
      screen: AuthScreen,
    },
  },
  {},
);

/**
 * @Stack
 * contains screens for @createPost flow
 * @Upload
 * @AddDetails
 * @Tag
 * @Preview
 */
const PostStack = createStackNavigator(
  {
    Upload: {
      screen: UploadScreen,
    },
    AddDetails: {
      screen: AddDetailsScreen,
    },
    Tag: {
      screen: TagScreen,
    },
    Preview: {
      screen: PreviewScreen,
    },
  },
  {
    initialRouteName: 'Upload',
  },
);

/**
 * @Stack
 * contains screens for @user flow
 * @Profile
 * @Edit
 * @Settings
 */
const UserStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Edit: {
      screen: ProfileFormScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

/**
 * @Stack
 * contains screens for @onboarding flow
 * @Styles
 * @Brands
 * @People
 * @CreateProfile
 */
const OnboardingStack = createStackNavigator(
  {
    OB1: {
      screen: OBScreen1,
    },
    OB2: {
      screen: OBScreen2,
    },
    OB3: {
      screen: OBScreen3,
    },
    CreateProfile: {
      screen: ProfileFormScreen,
    },
  },
  {
    initialRouteName: 'OB1',
  },
);

/**
 * @TabNavigator
 * contains screens for @bottomTab flow
 * @Feed
 * @Notifications
 * @UserStack
 */
const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen,
    },
    Notifications: {
      screen: NotificationsScreen,
    },
    Me: {
      screen: UserStack,
    },
  },
  {
    initialRouteName: 'Feed',
    order: ['Feed', 'Notifications', 'Me'],
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => renderTabIcons(navigation, focused),
    }),
    tabBarOptions: {
      style: styles.tabBar,
      labelPosition: 'below-icon',
      labelStyle: styles.label,
      tabStyle: styles.tab,
      activeTintColor: '#272727',
      keyboardHidesTabBar: true,
    },
  },
);

/**
 * @Stack
 * contains screens for @app flow
 * @Search
 * @Post
 * @PostStack
 * @Main
 */
const AppStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    Post: {
      screen: PostScreen,
    },
    CreatePost: {
      screen: PostStack,
    },
    Main: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'Main',
    // headerMode: 'none',
  },
);

/**
 * @AppContainer
 * contains @swtich for @root flow
 * @AppStack
 * @OnboardingStack
 * @AuthStack
 */
const RootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      App: {
        screen: AppStack,
      },
      Onboarding: {
        screen: OnboardingStack,
      },
      Auth: {
        screen: AuthStack,
      },
    },
    {
      initialRouteName: 'App',
    },
  ),
);

export default RootNavigator;
