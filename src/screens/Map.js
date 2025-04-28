import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#384E77', '#18314f', '#04020F']} // Cores do gradiente
      start={{ x: 0.5, y: 0 }} // Ponto de início do gradiente (topo esquerdo)
      end={{ x: 0.5, y: 1 }} // Ponto de término do gradiente (canto inferior direito)
      style={styles.container}
      >
        <View style={styles.innercontainer}>
          <Text>Hello World!</Text>
          <StatusBar style="auto" />
          <Button title="Clique aqui" onPress={() => alert('Botão pressionado!')} />
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//npm start
// *running app*
//CTRL+C to exit