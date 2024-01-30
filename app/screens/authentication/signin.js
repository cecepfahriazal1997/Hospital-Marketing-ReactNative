import { ScrollView, View, StatusBar } from 'react-native';
import { Container, Button } from '../../components';
import { Label } from '../../components/label';
import { Input } from '../../components/input';
import colors from '../../constants/colors';

export default function App({navigation}) {
  return (
		<Container safe background="white">
        <StatusBar hidden={false} backgroundColor={colors.primary} barStyle="light-content" />
      <ScrollView>
        <View style={{padding: 30, flex: 1, justifyContent: 'center'}}>
          <Label text='Selamat Datang Kembali' size={25} style={{marginTop: 100}}></Label>
          <Label text='Masuk ke akun Anda!' size={25}></Label>
          <View style={{marginTop: 30}}>
            <Input title="Username" placeholder='Masukan username' marginBottom={20}></Input>
            <Input title="Password" placeholder='Masukan password' secureTextEntry={true}></Input>
          </View>
          <View style={{ marginTop:28}}>
            <Button
              color="primary"
              textColor="white"
              text="Masuk ke Aplikasi"
              onPress={()=>navigation.navigate('Main')}/>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 48, marginTop: 20}}>
              <View style={{backgroundColor: colors.grayLightLevel2, height: 1, flex: 1, alignSelf: 'center'}} />
              <Label text="Atau masuk dengan" size={12} color='gray' style={{ marginHorizontal: 10 }}></Label>
              <View style={{backgroundColor: colors.grayLightLevel2, height: 1, flex: 1, alignSelf: 'center'}} />
          </View>
          <View style={{ flexDirection: 'row', marginTop:15, justifyContent: 'center', gap: 20}}>
            <Button
              color="white"
              iconColor="black"
              borderRadius={100}
              icon='logo-apple'
              style={{ width: 50 , height : 50, borderWidth: 1, borderColor: colors.grayLight }}
              onPress={()=>navigation.navigate('Main')}/>
            <Button
              color="white"
              iconColor="danger"
              borderRadius={100}
              icon='logo-google'
              style={{ width: 50 , height : 50, borderWidth: 1, borderColor: colors.grayLight }}
              onPress={()=>navigation.navigate('Main')}/>
            <Button
              color="white"
              iconColor="primary"
              borderRadius={100}
              icon='logo-facebook'
              style={{ width: 50 , height : 50, borderWidth: 1, borderColor: colors.grayLight }}
              onPress={()=>navigation.navigate('Main')}/>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}