
import React, { useEffect, useState } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { Button } from './button'
import { Label } from './label'

import DatePicker from 'react-native-modern-datepicker';

const styles = StyleSheet.create({
	backdropModal: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: colors.blackTransparent,
	  marginTop: 22,
	},
	modalView: {
	  width: '80%',
	  backgroundColor: 'white',
	  borderRadius: 10,
	  paddingVertical: 10,
	  paddingHorizontal: 20,
	  shadowColor: '#000',
	  shadowOffset: {
		width: 0,
		height: 2,
	  },
	  shadowOpacity: 0.25,
	  shadowRadius: 4,
	  elevation: 2,
	},
	modalHeader: {
	  width: '100%',
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	},
	modalBody: {
	  paddingTop: 10
	},
});

const Modals	= ({children, showModal=false, closeModal, title=''})=>{
	return <>
		<Modal
			animationType="fade"
			transparent={true}
			visible={showModal}
			statusBarTranslucent={true}
			onRequestClose={closeModal}>
			<View style={styles.backdropModal}>
				<View style={styles.modalView}>
					<View style={styles.modalHeader}>
						<Label text={title} />
						<Button
						icon='close'
						iconColor={colors.black}
						iconSize={20}
						borderRadius={20}
						padding={5}
						color='grayLightLevel2'
						onPress={closeModal}>
						</Button>
					</View>
					<View style={styles.modalBody}>
						{children}
					</View>
				</View>
			</View>
		</Modal>
	</>
}

const DatePickerModal	= ({showModal=true, date, closeModal, title='', handleChange})=>{
	return <>
		<Modal
			animationType="fade"
			transparent={true}
			visible={showModal}
			statusBarTranslucent={true}
			onRequestClose={closeModal}>
			<View style={styles.backdropModal}>
				<View style={{...styles.modalView, paddingHorizontal: 0}}>
					<View style={{...styles.modalHeader, paddingHorizontal: 20}}>
						<Label text={title} />
						<Button
						icon='close'
						iconColor={colors.black}
						iconSize={20}
						borderRadius={20}
						padding={5}
						color='grayLightLevel2'
						onPress={closeModal}>
						</Button>
					</View>
					<View style={styles.modalBody}>
						<DatePicker
							options={{
								borderColor: colors.white,
								selectedTextColor: colors.white
							}}
							mode='calendar'
							current={date}
							selected={date}
							onDateChange={handleChange}
						/>
					</View>
				</View>
			</View>
		</Modal>
	</>
}

export {Modals, DatePickerModal}