import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Container, Button } from '../components';
import colors from '../constants/colors';

export default function App({navigation}) {
  return (
		<Container safe background="primary">
      <StatusBar hidden={false} />
      <View style={{padding: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: colors.black}}>Screen One</Text>
        <View style={{ flexDirection:'row', marginTop:28 }}>
          <Button
            color="white"
            textColor="primary"
            text="Mulai Membaca"
            onPress={()=>navigation.navigate('PageTwo')}/>
        </View>
      </View>
    </Container>
  );
}
