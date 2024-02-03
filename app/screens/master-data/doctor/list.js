import React, {useState} from 'react';
import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Container, Input, Label, Modals } from '../../../components';
import { colors, images } from '../../../constants';

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

const DoctorList = ({navigation}) => {
	const [modalVisible, setModalVisible] = useState(false);
  
  const menuItem = [
    {
      title: 'dr. Adi, Sp.KK',
      image: images.icon_doctor,
      specialist: 'Dokter Kulit',
      hospital: 'RS. Abadi Cahya',
    },
    {
      title: 'dr. Budi, Sp.THT-KL',
      image: images.icon_doctor,
      specialist: 'Dokter THT',
      hospital: 'RS. Harapan',
    },
    {
      title: 'dr. Candra, Sp.M',
      image: images.icon_doctor,
      specialist: 'Dokter Mata',
      hospital: 'RS. Sejahtera',
    },
  ];

  const action = [
    {
      'icon': 'pencil',
      'title': 'Edit'
    },
    {
      'icon': 'trash',
      'title': 'Hapus'
    }
  ];
  
  const elementItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setModalVisible(true)} style={{ ...styles.button }}>
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Image source={item.image} style={styles.image} resizeMode='center' />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Label text={ item.title } size={14}></Label>
        <Label text={ item.specialist } size={14} color='gray' style={{ marginTop: 5 }}></Label>
        <Label text={ item.hospital } size={14} color='gray' style={{ marginTop: 5 }}></Label>
      </View>
    </TouchableOpacity>
  );
  
  const headerItem = () => (
    <View style={{ flexDirection:'row', flex: 1, gap: 10}}>
      <Input placeholder='Cari Dokter' styleIcon={{ name: 'search', color: colors.gray, size: 16 }} backgroundColor="grayLightLevel2"></Input>
      <Button icon='list-outline' color='grayLightLevel2' iconColor='gray' style={{ height: 50}} />
    </View>
  )

  return (
		<Container safe background="grayLightLevel1">
      <StatusBar hidden={false} translucent backgroundColor='transparent' barStyle="dark-content" />
      <Modals showModal={modalVisible} title='Pilih Aksi' closeModal={() => {setModalVisible(false)}}>
        {
          action.map((item, index) => (
            <TouchableOpacity key={index} style={{ flexDirection: 'row', alignItems:'center', gap: 8, borderBottomWidth: index < action.length-1 ? 1 : 0, borderBottomColor: colors.grayLight, paddingVertical: 8, activeOpacity: 0.8 }}>
              <Ionicons name={item.icon} color={colors.gray} size={20} style={{ alignSelf: 'center' }} />
              <Label text={item.title} />
            </TouchableOpacity>)
          )
        }
      </Modals>
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

export default DoctorList;