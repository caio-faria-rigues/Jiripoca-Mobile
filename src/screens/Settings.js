import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsScreen() {
  return (
    <LinearGradient
      colors={['#384E77', '#18314f', '#04020F']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
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