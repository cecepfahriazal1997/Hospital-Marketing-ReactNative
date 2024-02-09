import React, {useState} from 'react';
import { View, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Container, Input, Label, Modals } from '../../../components';
import { colors, styles } from '../../../constants';

const MarketingComparisonList = ({navigation}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [currTab, setCurrTab] = useState('month');
  
  const menuItem = [
    {
      indicator: 'Besar RS lain',
      information: 'Kelas A',
      decision: '(Promosi) = P4 segmen pasien',
    },
    {
      indicator: 'Besar RS lain',
      information: 'Kelas B',
      decision: '(Promosi) = P4 segmen pasien',
    },
    {
      indicator: 'Besar RS lain',
      information: 'Kelas C',
      decision: '(Promosi) = P4 segmen pasien',
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
  
  const elementItem = ({ item, index }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setModalVisible(true)} style={{ ...styles.card }} key={index}>
      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Label text="Indikator" size={12} color='gray'></Label>
              <Label text={ item.indicator } size={14}></Label>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 16 }}>
              <Label text="Informasi" size={12} color='gray'></Label>
              <Label text={ item.information } size={14}></Label>
          </View>
        </View>
        <Label text="Keputusan" size={12} color='gray' style={{marginTop: 8}}></Label>
        <Label text={ item.decision } size={14}></Label>
      </View>
    </TouchableOpacity>
  );
  
  const headerItem = () => (
    <View>
      <View style={{ flexDirection:'row', justifyContent: 'space-between', gap: 10, marginBottom: 20, ...styles.card, padding: 5}}>
          <Button
            color={(currTab == 'month' ? 'primary' : 'white')}
            textColor={(currTab == 'month' ? 'white' : 'gray')}
            text="Data Bulanan"
            icon='calendar'
            iconSize={20}
            iconColor={(currTab == 'month' ? 'white' : 'gray')}
            styleTitle={{ marginLeft: 10 }}
            fontSize={14}
            onPress={()=> setCurrTab('month')}/>
          <Button
            color={(currTab == 'year' ? 'primary' : 'white')}
            textColor={(currTab == 'year' ? 'white' : 'gray')}
            text="Data Tahunan"
            icon='calendar'
            iconSize={20}
            iconColor={(currTab == 'year' ? 'white' : 'gray')}
            styleTitle={{ marginLeft: 10 }}
            fontSize={14}
            onPress={()=> setCurrTab('year')}/>
      </View>
      <View style={{ flexDirection:'row', flex: 1, gap: 10}}>
        <Input placeholder='Cari Perbandingan Pemasaran' styleIcon={{ name: 'search', color: colors.gray, size: 16 }} backgroundColor="grayLightLevel2"></Input>
        <Button icon='options-outline' color='grayLightLevel2' iconColor='gray' style={{ height: 50}} />
      </View>
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
        contentContainerStyle={{ marginHorizontal:20 }}
        ListHeaderComponent={headerItem}
        ListHeaderComponentStyle={{ marginVertical: 20}}
        />
    </Container>
  );
}

export default MarketingComparisonList;