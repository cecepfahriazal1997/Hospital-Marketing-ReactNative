import { View, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants';

import Home from './fragment/home';
import Account from './fragment/account';
import { Container } from '../components';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 85 : 75,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    borderTopWidth: 0
  },
  tabBarItemStyle: {
    margin: 8,
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
    <Container safe={true}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor='transparent' />
        <Tab.Navigator safeAreaInsets={{bottom: 0}} screenOptions={screenOptions}>
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
    </Container>
  );
}

export default Dashboard;