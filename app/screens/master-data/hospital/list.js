import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Container, Input } from '../../../components';
import { colors, images } from '../../../constants';
import { Label } from '../../../components/label';

const menuItem = [
  {
    title: 'RS. Abadi Cahya',
    image: images.icon_hospital,
    address: 'Jln. Cihanjuang Blok F. 17'
  },
  {
    title: 'RS. Harapan',
    image: images.icon_hospital,
    address: 'Jln. Soekarno Blok B. 107'
  },
  {
    title: 'RS. Sejahtera',
    image: images.icon_hospital,
    address: 'Jln. Cisauk No.09, Tangerang'
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
    elevation: 2,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.1, // IOS
    shadowRadius: 2, //IOS
    gap: 15
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

const elementItem = ({ item }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={{ ...styles.button }}>
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Image source={item.image} style={styles.image} />
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Label text={ item.title } size={14}></Label>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
        <Ionicons name='location-outline' color={colors.gray} size={20} style={{ alignSelf: 'center' }} />
        <Label text={ item.address } size={14} color='gray'></Label>
      </View>
    </View>
  </TouchableOpacity>
);

const headerItem = () => (
  <View style={{ flexDirection:'row', flex: 1, gap: 10}}>
    <Input placeholder='Cari Rumah Sakit' styleIcon={{ name: 'search', color: colors.gray, size: 16 }} backgroundColor="grayLightLevel2"></Input>
    <Button icon='list-outline' color='grayLightLevel2' iconColor='gray' style={{ height: 50}} />
  </View>
)

const HospitalList = ({navigation}) => {
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
        ListHeaderComponent={headerItem}
        ListHeaderComponentStyle={{ marginVertical: 20}}
        />
    </Container>
  );
}

export default HospitalList;