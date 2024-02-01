import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './fragment/home';

const Tab = createBottomTabNavigator();

const styles = {
  tabBarStyle: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    borderTopWidth: 0
  },
  tabBarItemStyle: {
    margin: 8,
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontFamily: 'poppins'
  },
  headerShown: false,
  laze: true
};

const Dashboard = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={styles}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ backgroundColor: (focused ? 'rgba(7, 102, 173, 0.2)' : '#fff'), paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
              <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
            </View>
          )}}/>
      <Tab.Screen name="Account" component={Home} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ backgroundColor: (focused ? 'rgba(7, 102, 173, 0.2)' : '#fff'), paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
              <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
            </View>
          )}}/>
    </Tab.Navigator>
  );
}

export default Dashboard;