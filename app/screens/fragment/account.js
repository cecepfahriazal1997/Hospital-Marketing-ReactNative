import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Label } from '../../components';
import { colors, images, styles } from '../../constants';
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

const elementMenu = ({ item }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => {}} style={{ ...styles.card }}>
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
    <Image source={images.doctor} style={ styles.imageCircle } resizeMode={"contain"} />
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