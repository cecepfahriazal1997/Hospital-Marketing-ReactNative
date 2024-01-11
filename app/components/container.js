import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import colors from '../constants/colors';


export const Container = ({ children, safe, background="light" })=>{
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ { flex: 1, backgroundColor:colors[background] } } >
            {
                safe ?
                <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>:
                children
            }
        </KeyboardAvoidingView>
    )
}