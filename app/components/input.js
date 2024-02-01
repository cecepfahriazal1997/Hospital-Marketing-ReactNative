
import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import colors from './../constants/colors';
import { Label } from './label';
import { Ionicons } from '@expo/vector-icons';

export const Input	= ({title, placeholder, onChange, secureTextEntry=false, marginBottom=0, styleIcon={ iconLeft:null, iconColor: 'black', iconSize: 25 }})=>{
	return <>
        {title && (<Label
			size={14}
			font="poppins"
			text={title}
			color="black"
			marginBottom={10}/>)}
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, borderWidth: 1, borderColor: colors.grayLight, borderRadius: 10, marginBottom: marginBottom }}>
			{
			styleIcon.iconLeft && 
			<Ionicons
				{ ...{styleIcon}} />
			}
			<TextInput
				placeholderTextColor={colors.gray}
				onChangeText={onChange}
				style={{
						textAlign:'left',
						paddingHorizontal: 5,
						paddingVertical: 10,
						fontSize: 16,
						fontFamily: 'poppins',
						flex: 1,
					}}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}/>
		</View>
	</>
}