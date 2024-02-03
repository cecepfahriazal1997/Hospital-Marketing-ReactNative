import React, {useState} from 'react';
import { View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Container, Input, Label, Modals } from '../../../components';
import { colors, images, styles } from '../../../constants';

const HospitalList = ({navigation}) => {
	const [modalVisible, setModalVisible] = useState(false);
  
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

export default HospitalList;