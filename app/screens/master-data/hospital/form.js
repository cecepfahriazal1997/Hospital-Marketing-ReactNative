import { useState } from 'react';
import { ScrollView, View, StatusBar, Image, Alert } from 'react-native';
import { Container, Button, Label, Input } from '../../../components';
import { images } from '../../../constants';
import colors from '../../../constants/colors';
import * as ImagePicker from 'expo-image-picker';


export default function HospitalForm({navigation}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
		<Container safe background="white">
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='transparent' />
      <ScrollView>
        <View style={{padding: 30, flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center', marginBottom: 60}}>
            <View style={{ padding: 10, backgroundColor: colors.grayLight, width: 150, alignItems: 'center', alignSelf: 'center', borderRadius: 20, marginBottom: 10 }}>
              {!image && <Image source={images.no_image} tintColor={colors.gray} style={{ width: '100%', height: 100 }} resizeMode='contain' />}
              {image && <Image source={{ uri: image }} style={{ width: '100%', height: 100 }} resizeMode='contain' />}
            </View>
            <Button color='primary' text='Choose File' textColor='white' fontSize={14} style={{width: 150}} onPress={pickImage} />
          </View>
          <View>
            <Input title="Nama" placeholder='Masukan nama rumah sakit' marginBottom={20}></Input>
            <Input title="No. Telepon" placeholder='Masukan no telepon' marginBottom={20}></Input>
            <Input title="Alamat" placeholder='Masukan alamat rumah sakit' marginBottom={20} numberOfLines={5}></Input>
          </View>
          <View style={{ marginTop:28}}>
            <Button
              color="primary"
              textColor="white"
              text="Simpan"
              onPress={()=>{
                Alert.alert('Berhasil', 'Data berhasil disimpan!');
                navigation.navigate('HospitalList');
              }}/>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}