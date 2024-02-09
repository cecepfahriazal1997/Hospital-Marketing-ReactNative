import { ScrollView, View, StatusBar, Alert } from 'react-native';
import { Container, Button, Select } from '../../../components';

export default function AccountingForm({navigation}) {
  const data = ['Option 1', 'Option 2'];

  return (
		<Container safe background="white">
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='transparent' />
      <ScrollView>
        <View style={{padding: 30, flex: 1, justifyContent: 'center'}}>
          <View>
            <Select title="Umur" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Jenis Kelamin" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Pendidikan" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Agama" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Asal Pasien" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Pekerjaan" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Status" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Cara Masuk Pasien" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Jam Masuk" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Pasien Datang" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Cara Pembayaran" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Keadaan Keluar Pasien" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="5 Besar Kunjungan Politeknik" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="5 Besar Diagnosa Pasien R. Inap" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="5 Besar Diagnosa Pasien Operasi" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="5 Besar Diagnosa Persalinan" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="5 Besar Penyebab Kematian" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="5 Besar Diagnosa Rujukan ke RS lain" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
            <Select title="Jenis Operasi" data={data} placeholder='- Pilih -' marginBottom={16}></Select>
          </View>
          <View style={{ marginTop:28}}>
            <Button
              color="primary"
              textColor="white"
              text="Simpan"
              onPress={()=>{
                Alert.alert('Berhasil', 'Data berhasil disimpan!');
                navigation.navigate('AccountingList');
              }}/>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}