import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './helpers/root-navigation';

// import all screens
import main from './screens/main';
import signin from './screens/authentication/signin';
import dashboard from "./screens/dashboard";

const Stack = createStackNavigator()
const horizontalAnimation = {
	headerShown: false,
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
			<Stack.Screen name="Main" component={main} />
			<Stack.Screen name="Signin" component={signin} />
			<Stack.Screen name="Dashboard" component={dashboard} />
		</Stack.Navigator>
	</NavigationContainer>
	)
}