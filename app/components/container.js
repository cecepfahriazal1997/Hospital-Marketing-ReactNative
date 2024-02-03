import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import colors from '../constants/colors';


export const Container = ({ children, safe, background="light", style})=>{
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={ { flex: 1, backgroundColor:colors[background], ...style } } >
            {
                safe ?
                <SafeAreaView style={{ flex: 1}} forceInset = {{top: "always", bottom: "never"}}>{children}</SafeAreaView>:
                children
            }
        </KeyboardAvoidingView>
    )
}