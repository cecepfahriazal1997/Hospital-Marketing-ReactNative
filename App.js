import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Constants from 'expo-constants';

import Router from './app/Router';

export default function App(props) {

	const [ isLoadingComplete, setLoadingComplete ]	= useState(false);
	const [ initialRoute, setInitialRoute ]			= useState("Main");

	const prepare	= async()=>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    setInitialRoute("Signin");
    // const token 	= await AsyncStorage.getItem('@token')
    // if (token !== null) {
        // setInitialRoute("PageOne");
    // }

		try {
			// Keep the splash screen visible while we fetch resources
			await SplashScreen.preventAutoHideAsync()
			await Font.loadAsync({
				// font
				'poppins-extra-bold': require('./assets/fonts/poppins-extra-bold.ttf'),
				'poppins-thin': require('./assets/fonts/poppins-thin.ttf'),
				'poppins': require('./assets/fonts/poppins-regular.ttf'),
			})	

			if (Constants.appOwnership!="expo"){
				const update 	= await Updates.checkForUpdateAsync()

				if (update.isAvailable) {
					setInitialRoute("Update");
				}
			}
		} catch (e) {
			console.warn(e);
		} finally {
			// Tell the application to render
			await SplashScreen.hideAsync();
			setLoadingComplete(true);
		}
	}

	useEffect(() => {
		prepare();
	  }, []);
	

	if(!isLoadingComplete) {
		return null
	} else {
		return <>
			<StatusBar hidden={true}/>
			<Router initialRoute={initialRoute}/>
		</>
	}
}