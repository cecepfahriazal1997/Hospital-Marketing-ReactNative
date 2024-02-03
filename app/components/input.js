
import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import colors from './../constants/colors';
import { Label } from './label';
import { Ionicons } from '@expo/vector-icons';

export const Input	= ({title, placeholder, onChange, secureTextEntry=false, marginBottom=0, backgroundColor='grayLightLevel1', fontSize=14, numberOfLines=1, styleIcon={ name:null, color: 'black', size: 25 }})=>{
	return <>
        {title && (<Label
			size={14}
			font="poppins"
			text={title}
			color="black"
			marginBottom={10}/>)}
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, borderWidth: 1, borderColor: colors.grayLight, borderRadius: 10, marginBottom: marginBottom, backgroundColor: colors[backgroundColor] }}>
			{
			styleIcon.name && 
			<Ionicons name={styleIcon.name} color={styleIcon.color} size={styleIcon.size} style={{ alignSelf: 'center' }} />
			}
			<TextInput
				placeholderTextColor={colors.gray}
				onChangeText={onChange}
				multiline={numberOfLines > 1}
				numberOfLines={numberOfLines}
				style={{
						textAlign:'left',
						textAlignVertical: (numberOfLines > 1) ? 'top' : 'center',
						paddingHorizontal: 5,
						paddingVertical: 10,
						fontSize: fontSize,
						fontFamily: 'poppins',
						flex: 1,
					}}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}/>
		</View>
	</>
}