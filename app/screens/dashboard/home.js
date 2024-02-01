import { ScrollView, View, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container, Button } from '../../components';
import { colors, images } from '../../constants';
import { Label } from '../../components/label';
import { LinearGradient } from 'expo-linear-gradient';

const menuItem = [
  {
    title: 'Master Data',
    image: images.menu_1
  },
  {
    title: 'Masukan',
    image: images.menu_2
  },
  {
    title: 'Proses',
    image: images.menu_3
  },
  {
    title: 'Keluaran',
    image: images.menu_4
  },
  {
    title: 'Keputusan',
    image: images.menu_5
  },
  {
    title: 'Hasil',
    image: images.menu_6
  }
];

const elementMenu = ({ item }) => (
  <TouchableOpacity onPress={() => {}} style={{ margin: 4, flex:1, alignItems: 'center', backgroundColor: colors.white, borderRadius: 10, borderWidth: 1, borderColor: colors.grayLight, padding: 8}}>
    <Image
      style={{ width: 70, height: 70, resizeMode: 'center' }}
      source={ item.image }
    />
    <Label text={ item.title } style={{ fontWeight: '600' }}></Label>
  </TouchableOpacity>
);

const headerMenu = () => (
  <LinearGradient
    // Background Linear Gradient
    colors={['rgba(226, 222, 249, 0.87)', 'rgba(248, 189, 141, 0.60)']}
    start={{x:0, y:1}}
    style={{ padding: 15, borderRadius: 20, marginTop: 20}}>
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 2 }}>
          <Label text="Assalamu’alaikum, Dr. dr. H. Boy Subiros Sabarguna, MARS" size={12}></Label>
          <Label text="Selamat datang di Sistem Informasi Pemasaran Rumah Sakit Berbasis Rekam Medis" size={14} style={{marginTop: 10}}></Label>
        </View>
        <Image
          style={{ flex: 1, width: 'auto', height: 'auto', resizeMode: 'center' }}
          source={ images.banner }
        />
      </View>
  </LinearGradient>
);

const Home = ({navigation}) => {
  return (
		<Container safe background="white">
        <StatusBar hidden={false} backgroundColor={colors.primary} barStyle="light-content" />
      <FlatList
        nestedScrollEnabled={true}
        data={menuItem}
        renderItem={elementMenu}
        keyExtractor={(item) => item.title}
        numColumns={3}
        contentContainerStyle={{ marginTop: 30, marginHorizontal:20 }}
        ListHeaderComponent={headerMenu}
        />
    </Container>
  );
}

export default Home;