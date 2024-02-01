
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import colors from './../constants/colors';
import { Label } from './label';

export const Input	= ({title, placeholder, onChange, secureTextEntry=false, marginBottom=0})=>{
	
	return <>
        {title && (<Label
			size={14}
			font="poppins"
			text={title}
			color="black"
			marginBottom={10}/>)}
		<TextInput
			placeholderTextColor={colors.gray}
			onChangeText={onChange}
			style={{ 
					borderWidth: 1, 
					borderColor: colors.grayLight,
					borderRadius: 10,
					textAlign:'left',
                    paddingHorizontal: 10,
					paddingVertical: 10,
					fontSize: 16,
					fontFamily: 'poppins',
					marginBottom: marginBottom,
				}}
			placeholder={placeholder}
			secureTextEntry={secureTextEntry}/>
	</>
}