import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Tela1Screen } from './src/Screens/Tela1';
import {Tela2Screen} from'./src/Screens/Tela2'
export default function App() {
  return (
    <Tela1Screen/>
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
