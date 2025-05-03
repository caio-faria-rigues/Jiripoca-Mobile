import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation/Navigation';
import * as SystemUI from 'expo-system-ui'; // Importe a biblioteca
import React, { useEffect } from 'react'; // Importe useEffect

import Home from './src/screens/Home';

const customFonts = {
    'Lato-Regular': require('./assets/fonts/lato/Lato-Regular.ttf'),
    // Adicione outras fontes aqui, se tiver:
    // 'Lato-Bold': require('./assets/fonts/lato/Lato-Bold.ttf'),
    // 'OpenSans-Regular': require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
  };

function App(){
    const [fontsLoaded] = useFonts(customFonts);
    useEffect(() => {
        SystemUI.setBackgroundColorAsync('#04020F');
    }, []);
    
    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
        );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
