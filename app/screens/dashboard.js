import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants';

import Home from './fragment/home';
import Account from './fragment/account';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    borderTopWidth: 0
  },
  tabBarItemStyle: {
    margin: 10,
    width:'auto'
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: 'poppins'
  },
  headerShown: false,
  laze: true
};

const Dashboard = ({navigation}) => {
  return (
		// <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={{ backgroundColor: (focused ? colors.primaryTransparent : colors.white), paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
              </View>
            )}}/>
        <Tab.Screen name="Account" component={Account} options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={{ backgroundColor: (focused ? colors.primaryTransparent : colors.white), paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
              </View>
            )}}/>
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default Dashboard;