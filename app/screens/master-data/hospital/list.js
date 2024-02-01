import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Input } from '../../../components';
import { colors, images } from '../../../constants';
import { Label } from '../../../components/label';

const menuItem = [
  {
    title: 'RS. Abadi Cahya',
    image: images.icon_hospital,
    address: 'RS. Abadi Cahya'
  },
  {
    title: 'RS. Harapan',
    image: images.icon_hospital,
    address: 'Jln. Soekarno Blok B. 107'
  },
  {
    title: 'RS. Sejahtera',
    image: images.icon_hospital,
    descriaddressption: 'Jln. Cisauk No.09, Tangerang'
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

const elementItem = ({ item }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={{ ...styles.button }}>
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={item.image} style={styles.image} />
    </View>
    <View style={{ flex: 2, justifyContent: 'center' }}>
      <Label text={ item.title } size={14}></Label>
    </View>
  </TouchableOpacity>
);

const headerItem = () => (
  <View style={{ flex: 1}}>
    <Input placeholder='Cari Rumah Sakit' styleIcon={{ name: 'person' }} backgroundColor="grayLightLevel2"></Input>
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