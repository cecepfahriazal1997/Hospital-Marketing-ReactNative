import React, {useState} from 'react';
import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Container, Input, Label, Modals } from '../../../components';
import { colors, images, styles } from '../../../constants';

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
    <TouchableOpacity activeOpacity={0.8} onPress={() => setModalVisible(true)} style={{ ...styles.card }}>
      <View style={ styles.badgeImageMenu }>
          <Image source={item.image} style={styles.imageMenu} resizeMode={"contain"} />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Label text={ item.title } size={14}></Label>
        <Label text={ item.specialist } size={14} color='gray'></Label>
        <Label text={ item.hospital } size={14} color='gray'></Label>
      </View>
    </TouchableOpacity>
  );
  
  const headerItem = () => (
    <View style={{ flexDirection:'row', flex: 1, gap: 10}}>
      <Input placeholder='Cari Dokter' styleIcon={{ name: 'search', color: colors.gray, size: 16 }} backgroundColor="grayLightLevel2"></Input>
      <Button icon='options-outline' color='grayLightLevel2' iconColor='gray' style={{ height: 50}} />
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