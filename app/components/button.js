import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from './../constants/colors';
import { Label } from './label';

export const Button	= ({text, textColor, fontSize=16, color, onPress, icon=null, iconSize=25, iconColor='white', disabled=false, borderRadius=10, padding= 10, style, styleTitle})=>{
	return <View style={{ }}>
		<TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.6}>
			<View 
				style={{ 
					borderRadius: borderRadius,
					backgroundColor: colors[color],
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					padding: padding,
					...style
				}}>
					{
						icon && 
						<Ionicons
							color={colors[iconColor]}
							size={iconSize}
							name={icon}/>
					}
				<Label
					align='center'
					font='poppins'
					color={textColor}
					size={fontSize}
					text={text}
					style={styleTitle}/>
			</View>
		</TouchableOpacity>
	</View>
}