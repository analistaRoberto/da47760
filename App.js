import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      <Text>Primeras Pruebas</Text>
      <Text>Curso de Desarrollo de Aplicacion</Text>
      <StatusBar style="auto" />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
     
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'red',
  },
 Button: {
  width: 50,
  height: 50,
  color: 'yellow',
  backgroundColor: 'brown',
 },

});
