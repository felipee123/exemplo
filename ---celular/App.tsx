import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Tela1Screen } from './src/Screens/Tela1';
import {Tela2Screen} from'./src/Screens/Tela2'
import{Tela3Screen} from './src/Screens/Tela3'
import {Tela4Screen} from './src/Screens/Tela 4';
import { Tela5Screen } from './src/Screens/Tela 5';
import { Tela6Screen } from './src/Screens/Tela 6';
import { Tela7Screen } from './src/Screens/Tela7';
import { NavegacaoPrincipal } from './src/Navigations';

export default function App() {
  return (
    <NavegacaoPrincipal />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
