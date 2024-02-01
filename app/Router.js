import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './helpers/root-navigation';

// import all screens
import signin from './screens/authentication/signin';
import dashboard from "./screens/dashboard";
import menuMasterData from "./screens/master-data/menu";

const Stack = createStackNavigator()
const horizontalAnimation = {
	gestureDirection: 'horizontal',
	cardStyleInterpolator: ({ current, layouts }) => {
		return {
		cardStyle: {
			transform: [
			{
				translateX: current.progress.interpolate({
					inputRange: [0, 1],
					outputRange: [layouts.screen.width, 0],
				}),
			},
			],
		},
		};
	},
};

export default App =({ initialRoute })=>{
	return (
	<NavigationContainer ref={navigationRef}>
		<Stack.Navigator initialRouteName={initialRoute} screenOptions={horizontalAnimation}>
			<Stack.Screen name="Signin" component={signin} options={{ headerShown: false }} />
			<Stack.Screen name="Dashboard" component={dashboard} options={{ headerShown: false }} />
			<Stack.Screen name="MasterData" component={menuMasterData} options={{ headerShown: true, title: 'Master Data' }} />
		</Stack.Navigator>
	</NavigationContainer>
	)
}