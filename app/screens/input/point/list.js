import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Label } from '../../../components';
import { colors, images, styles } from '../../../constants';

const MenuInput = ({navigation}) => {
  const menuItem = [
    {
      title: 'Survei',
      icon: images.survey,
    },
    {
      title: 'Simulasi',
      icon: images.simulation,
    },
  ];

  const onClickItem = (index) => {
    switch (index) {
      case 0:
        navigation.navigate('ComponentItem');
        break;
      case 1:
        navigation.navigate('DoctorList');
        break;
    
      default:
        break;
    }
  }
  
  const elementItem = ({ item, index }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onClickItem(index)} style={{ ...styles.card }}>
      <View style={{ alignItems: 'center', width: 50, height: 50, justifyContent: 'center', borderRadius: 10, overflow: "hidden", backgroundColor: colors.primaryTransparent}}>
          <Image source={item.icon} style={ styles.imageMenu } resizeMode={"contain"} />
      </View>
      <View style={{ justifyContent: 'center' }}>
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

export default MenuInput;