import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from './../constants/colors';
import { Label } from './label';

export const Button	= ({text, textColor, color, onPress, icon=null, iconSize=25, disabled=false})=>{
	return <View style={{ }}>
		<TouchableOpacity onPress={onPress} disabled={disabled}>
			<View 
				style={{ 
					borderRadius: 32,
					paddingVertical: 18,
					paddingHorizontal: 30,
					backgroundColor: colors[color],
					flexDirection: 'row',
					justifyContent: 'center'
				}}>
					{
						icon && 
						<Ionicons
							color={colors[color]}
							size={iconSize}
							name={icon}/>
					}
				<Label
					align='center'
					// font='manrope'
					color={textColor}
					size={20}
					text={text}
					mBottom={0}/>
			</View>
		</TouchableOpacity>
	</View>
}