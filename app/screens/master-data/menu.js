import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Container } from '../../components';
import { colors, images } from '../../constants';
import { Label } from '../../components/label';

const MenuMasterData = ({navigation}) => {
  const menuItem = [
    {
      title: 'Rumah Sakit',
      icon: images.icon_hospital,
      description: ''
    },
    {
      title: 'Dokter',
      icon: images.icon_doctor,
      description: ''
    },
    {
      title: 'Pasien',
      icon: images.icon_patient,
      description: ''
    }
  ];
  
  const styles = StyleSheet.create({
    button: {
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
      shadowOpacity: 0.5, // IOS
      shadowRadius: 1, //IOS
      gap: 10
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: colors.primaryTransparent,
      paddingTop: 50,
      resizeMode: 'center'
    }
  });

  const onClickItem = (index) => {
    switch (index) {
      case 0:
        navigation.navigate('HospitalList');
        break;
    
      default:
        break;
    }
  }
  
  const elementItem = ({ item, index }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onClickItem(index)} style={{ ...styles.button }}>
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={item.icon} style={styles.image} />
      </View>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <Label text={ item.title } size={14}></Label>
      </View>
    </TouchableOpacity>
  );
  
  return (
		<Container safe background="grayLightLevel1">
      <StatusBar hidden={false} backgroundColor='transparent' barStyle="dark-content" />
      <FlatList
        nestedScrollEnabled={true}
        data={menuItem}
        renderItem={elementItem}
        keyExtractor={(item) => item.title}
        numColumns={1}
        contentContainerStyle={{ marginTop: 30, marginHorizontal:20 }}
        ListHeaderComponentStyle={{ marginVertical: 30}}
        />
    </Container>
  );
}

export default MenuMasterData;