import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Label } from '../../components';
import { colors, images } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({navigation}) => {
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
  
  const styles = StyleSheet.create({
    button: {
      margin: 4,
      flex:1,
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: colors.grayLight,
      padding: 8,
      elevation: 3,
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 2, width: 2 }, // IOS
      shadowOpacity: 0.1, // IOS
      shadowRadius: 2, //IOS
    }
  });

  const goToMenu = (index) => {
    switch(index) {
      case 0:
        navigation.navigate('MasterData')
        break;
    }
  }
  
  const elementMenu = ({ item, index }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => goToMenu(index)} style={{ ...styles.button }}>
      <Image
        style={{ width: 70, height: 70, resizeMode: 'contain' }}
        source={ item.image }
        resizeMode={"contain"}
      />
      <Label text={ item.title } size={12} style={{ fontWeight: '600' }}></Label>
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
            style={{ flex: 1, width: 'auto', height: 'auto', resizeMode: 'contain' }}
            source={ images.banner }
            resizeMode={"contain"}
          />
        </View>
    </LinearGradient>
  );

  return (
		<Container safe background="grayLightLevel1">
      <FlatList
        nestedScrollEnabled={true}
        data={menuItem}
        renderItem={elementMenu}
        keyExtractor={(item) => item.title}
        numColumns={3}
        contentContainerStyle={{ marginTop: 30, marginHorizontal:20 }}
        ListHeaderComponentStyle={{ marginBottom: 30}}
        ListHeaderComponent={headerMenu}
        />
    </Container>
  );
}

export default Home;