import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Container } from '../../components';
import { colors, images } from '../../constants';
import { Label } from '../../components/label';
import { Ionicons } from '@expo/vector-icons';

const menuItem = [
  {
    title: 'Akun',
    icon: 'person',
    description: 'Ubah Data Akun'
  },
  {
    title: 'Komunikasi dan Bantuan',
    icon: 'chatbubbles-outline',
    description: 'Tanya, Temukan Jawabanmu'
  },
  {
    title: 'Term of Service',
    icon: 'document-text-outline',
    description: 'Ketentuan Penggunaan Platform'
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
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    backgroundColor: colors.primaryTransparent,
    paddingTop: 50,
    resizeMode: 'center'
  }
});

const elementMenu = ({ item }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={{ ...styles.button }}>
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{ backgroundColor: colors.primaryTransparent, borderRadius: 100, paddingVertical: 9, paddingHorizontal: 10 }}>
        <Ionicons name={item.icon} color={colors.primary} size={20} />
      </View>
    </View>
    <View style={{ flex: 2 }}>
      <Label text={ item.title } size={14} fontFamily='poppins-extra-bold'></Label>
      <Label text={ item.description } size={12}></Label>
    </View>
  </TouchableOpacity>
);

const headerMenu = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Image source={images.doctor} style={ styles.image } />
    <Label text="Dr. dr. H. Boy Subiros Sabarguna, MARS" fontFamily='poppins-extra-bold' size={16} style={{ alignItems: 'center', marginTop: 20, textAlign: 'center' }} />
    <Label text="Doctor" size={16} style={{ alignItems: 'center'}} />
  </View>
);

const Account = ({navigation}) => {
  return (
		<Container safe background="grayLightLevel1">
      <FlatList
        nestedScrollEnabled={true}
        data={menuItem}
        renderItem={elementMenu}
        keyExtractor={(item) => item.title}
        numColumns={1}
        contentContainerStyle={{ marginTop: 30, marginHorizontal:20 }}
        ListHeaderComponentStyle={{ marginVertical: 30}}
        ListHeaderComponent={headerMenu}
        />
    </Container>
  );
}

export default Account;