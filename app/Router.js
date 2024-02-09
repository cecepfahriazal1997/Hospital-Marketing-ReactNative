import React from "react";
import { Platform } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './helpers/root-navigation';

// import all screens
import signin from './screens/authentication/signin';
import dashboard from "./screens/dashboard";
import menuMasterData from "./screens/master-data";
import hospitalList from "./screens/master-data/hospital/list";
import hospitalForm from "./screens/master-data/hospital/form";
import doctorList from "./screens/master-data/doctor/list";
import doctorForm from "./screens/master-data/doctor/form";
import patientList from "./screens/master-data/patient/list";
import patientForm from "./screens/master-data/patient/form";
import menuInput from "./screens/input";
import componentItem from "./screens/input/component-item";
import medicalRecordList from "./screens/input/medical-record/list";
import medicalRecordForm from "./screens/input/medical-record/form";

import { Button } from "./components";
import { colors } from "./constants";

const Stack = createStackNavigator()
const horizontalAnimation = {
	gestureDirection: 'horizontal',
	headerBackTitleVisible: false,
	headerTintColor: 'black',
	headerStyle: {
		backgroundColor: colors.grayLightLevel1,
	},
	headerShadowVisible: false,
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
			<Stack.Screen name="HospitalList" component={hospitalList} options={ ({navigation}) => ({
				headerShown: true, title: 'Rumah Sakit',
				headerRight: () => (
					<Button icon='add-outline' iconColor="black" onPress={()=> navigation.navigate('HospitalForm')} />
				)
			})} />
			<Stack.Screen name="HospitalForm" component={hospitalForm} options={ ({navigation}) => ({
				headerShown: true, title: 'Form Rumah Sakit',
				headerStyle: {
					backgroundColor: colors.white
				},
			})} />
			<Stack.Screen name="DoctorList" component={doctorList} options={ ({navigation}) => ({
				headerShown: true, title: 'Dokter',
				headerRight: () => (
					<Button icon='add-outline' iconColor="black" onPress={()=> navigation.navigate('DoctorForm')} />
				)
			})} />
			<Stack.Screen name="DoctorForm" component={doctorForm} options={ ({navigation}) => ({
				headerShown: true, title: 'Form Dokter',
				headerStyle: {
					backgroundColor: colors.white
				},
			})} />
			<Stack.Screen name="PatientList" component={patientList} options={ ({navigation}) => ({
				headerShown: true, title: 'Pasien',
				headerRight: () => (
					<Button icon='add-outline' iconColor="black" onPress={()=> navigation.navigate('PatientForm')} />
				)
			})} />
			<Stack.Screen name="PatientForm" component={patientForm} options={ ({navigation}) => ({
				headerShown: true, title: 'Form Pasien',
				headerStyle: {
					backgroundColor: colors.white
				},
			})} />
			<Stack.Screen name="Input" component={menuInput} options={{ headerShown: true, title: 'Masukan' }} />
			<Stack.Screen name="ComponentItem" component={componentItem} options={{ headerShown: true, title: 'Komponen Pemasaran' }} />
			<Stack.Screen name="MedicalRecordList" component={medicalRecordList} options={ ({navigation}) => ({
				headerShown: true, title: 'Rekam Medis',
				headerRight: () => (
					<Button icon='add-outline' iconColor="black" onPress={()=> navigation.navigate('MedicalRecordForm')} />
				)
			})} />
			<Stack.Screen name="MedicalRecordForm" component={medicalRecordForm} options={ ({navigation}) => ({
				headerShown: true, title: 'Form Rekam Medis',
				headerStyle: {
					backgroundColor: colors.white
				},
			})} />
		</Stack.Navigator>
	</NavigationContainer>
	)
}