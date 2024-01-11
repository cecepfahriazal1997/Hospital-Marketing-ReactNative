import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import colors from './../constants/colors';

export const Label = ({font=false, medium=false, text, size=14, color="black_1", mTop=0, mBottom=4, align="auto", mLeft=0})=>{
    return (
        <Text style={{
            fontSize: size,
            // fontFamily: font?font:medium?"medium":"regular",
            fontWeight: medium?"500":"normal",
            color: colors[color],
            marginBottom:mBottom,
            marginTop:mTop,
            textAlign:align,
            marginLeft:mLeft,
        }}>{text}</Text> 
    )
}