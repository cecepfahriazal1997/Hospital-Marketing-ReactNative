import { Platform, StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
    card: {
      marginVertical: 4,
      flex:1,
      flexDirection: 'row',
      backgroundColor: colors.white,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: colors.grayLight,
      padding: 16,
      elevation: 1,
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 0.1, // IOS
      shadowRadius: 1, //IOS
      gap: 10
    },
    imageCircle: {
      width: 100,
      height: 100,
      borderRadius: 150 / 2,
      overflow: "hidden",
      backgroundColor: colors.primaryTransparent,
      paddingTop: 50,
      resizeMode: 'contain'
    },
    imageMenu: {
      width: 32,
      height: 32,
    },
    badgeImageMenu: {
        alignItems: 'center',
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: colors.primaryTransparent
    },
    select: {
      width: '100%',
      backgroundColor: 'transparent',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.grayLight
    },
    selectText: {
      fontSize: 12,
      textAlign: 'left',
      fontFamily: 'poppins'
    },
    selectDropdown: {
      marginTop: Platform.OS == 'android' ? -32 : -10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: colors.white,
      shadowColor: colors.blackTransparent,
      shadowRadius: 0.5,
      borderWidth: 1,
      borderColor: colors.grayLight,
      shadowOffset: {
        height: 0.5,
        width: 0.5
      }
    },
    selectDropdownRow: {
      width: '100%',
      backgroundColor: 'transparent',
      borderBottomColor: colors.grayLight,
    },
    selectDropdownText: {
      fontSize: 12,
      textAlign: 'left',
      color: colors.black,
      fontFamily: 'poppins'
    }
});