import { useState } from 'react';
import { ScrollView, View, StatusBar, Image, Alert, TouchableOpacity } from 'react-native';
import { Container, Button, Label, Input, DatePickerModal } from '../../../components';
import { images } from '../../../constants';
import colors from '../../../constants/colors';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function PatientForm({navigation}) {
  const [image, setImage] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [date, setDate] = useState(null);
  
	const handleChangeDate = (props) => {
		setDate(props)
    setModalVisible(false)
    // getFormatedDate(new Date(), 'YYYY-MM-DD')
	}

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
		<Container safe background="white">
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='transparent' />
      <DatePickerModal title='Date Picker' date={date} showModal={modalVisible} closeModal={() => {setModalVisible(false)}} handleChange={handleChangeDate} />
      <ScrollView>
        <View style={{padding: 30, flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center', marginBottom: 60}}>
            <View style={{ padding: 10, backgroundColor: colors.grayLight, width: 150, alignItems: 'center', alignSelf: 'center', borderRadius: 20, marginBottom: 10 }}>
              {!image && <Image source={images.no_image} tintColor={colors.gray} style={{ width: '100%', height: 100 }} resizeMode={"contain"} />}
              {image && <Image source={{ uri: image }} style={{ width: '100%', height: 100 }} resizeMode={"contain"} />}
            </View>
            <Button color='primary' text='Choose File' textColor='white' fontSize={14} style={{width: 150}} onPress={pickImage} />
          </View>
          <View>
            <Input title="Nama" placeholder='Masukan nama pasien' marginBottom={20}></Input>
            <Input title="Email" placeholder='Masukan no telepon' marginBottom={20}></Input>
            <Input title="No. Telepon" placeholder='Masukan no telepon' marginBottom={20}></Input>
            <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <Input title="Tempat Lahir" placeholder='Bandung' marginBottom={20}></Input>
              </View>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <Label text='Tanggal Lahir' style={{ marginBottom: 5 }}></Label>
                <TouchableOpacity activeOpacity={0.7} style={{ flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: colors.grayLight, backgroundColor:colors.grayLightLevel1, marginBottom: 20 }} onPress={() => {setModalVisible(true)}}>
                  <Label text={date || 'yyyy-mm-dd'}></Label>
                  <Ionicons name='calendar' color={colors.gray} size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <Input title="Alamat" placeholder='Masukan alamat pasien' marginBottom={20} numberOfLines={5}></Input>
          </View>
          <View style={{ marginTop:28}}>
            <Button
              color="primary"
              textColor="white"
              text="Simpan"
              onPress={()=>{
                Alert.alert('Berhasil', 'Data berhasil disimpan!');
                navigation.navigate('PatientList');
              }}/>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}