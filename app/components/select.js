
import React, { useEffect, useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import colors from './../constants/colors';
import { Label } from './label';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants';

export const Select	= ({title, marginBottom=0, backgroundColor='grayLightLevel1', placeholder, data=[]})=>{
	const [isOpened, setOpened] = useState(false);
	return <>
        {title && (<Label
			size={14}
			font="poppins"
			text={title}
			color="black"
			style={{ marginBottom: 5}}/>)}

		<SelectDropdown
			data={data}
			defaultButtonText={placeholder}
			buttonStyle={{ ...styles.select, marginBottom: marginBottom, backgroundColor: isOpened ? colors.white : colors[backgroundColor] }}
			buttonTextStyle={styles.selectText}
			dropdownStyle={styles.selectDropdown}
			rowStyle={styles.selectDropdownRow}
			rowTextStyle={styles.selectDropdownText}
			showsVerticalScrollIndicator={false}
			dropdownOverlayColor='transparent'
			onSelect={(selectedItem, index) => {
				console.log(selectedItem, index)
			}}
			buttonTextAfterSelection={(selectedItem, index) => {
				return selectedItem
			}}
			rowTextForSelection={(item, index) => {
				return item
			}}
			renderDropdownIcon={isOpened => {
				setOpened(isOpened)
				return <Ionicons name={isOpened ? 'chevron-up-outline' : 'chevron-down-outline'} color={colors.gray} size={18} />;
			}}
		/>
	</>
}