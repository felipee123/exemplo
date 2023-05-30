import * as React from 'react';
import { View, Text,Button,Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  tela2ScreenProps: {
    flexDirection: 'row',
  },
  imagem: { 
    width: 150, 
    height: 250 
  }
});



export interface Tela5Screen{
}

export function Tela5Screen (props: Tela5Screen) {
  const navigation = useNavigation<any>();
    return (
      <View style={{justifyContent:'center', flex:1 , alignItems:'center' }}>
      <Text style={{fontSize:29,color:'#0000FF'}}>Qual o Melhor Personagem</Text>
      <View style={styles.tela2ScreenProps}>
        <Image style={styles.imagem} source={require("../../img/Mulher-Maravilha.jpg")} />
        <Image style={styles.imagem} source={require("../../img/2e46ead133161b41b17cd701254b4530.jpg")} />
                 </View>
                  <Button title="Mulher Marivilha 1"  color="#841584" />
                  <Button title="capitã marvel 2"  color="#841584" />
                  <Button title="Entre aqui" color="#00BFFF" onPress={function () {
                         navigation.navigate('tela6')
            }}/>             
    </View>
    );
}