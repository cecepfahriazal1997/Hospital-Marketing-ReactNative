import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import colors from './../constants/colors';

export const Label = ({text, size=14, color="black", fontFamily="poppins", fontWeight="normal", style={}})=>{
    return (
        <Text style={{
            fontSize: size,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: colors[color],
            ...style
        }}>{text}</Text> 
    )
}