import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Open up !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3876BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '100'
  }
});
