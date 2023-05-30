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



export interface Tela6Screen{
}

export function Tela6Screen (props: Tela6Screen) {
  const navigation = useNavigation<any>();
    return (
      <View style={{justifyContent:'center', flex:1 , alignItems:'center' }}>
      <Text style={{fontSize:29,color:'#FF0000'}}>Qual o Melhor Personagem</Text>
      <View style={styles.tela2ScreenProps}>
        <Image style={styles.imagem} source={require("../../img/Shazam.jpg")} />
        <Image style={styles.imagem} source={require("../../img/wallpapers-do-homem-aranha-em-4k-para-pc-e-celular-4.jpg")} />
                 </View>
                  <Button title="Shazam 1"  color="#841584" />
                  <Button title="Homen aranha 2"  color="#841584" />
                  <Button title="Entre aqui" color="#00BFFF" onPress={function () {
                         navigation.navigate('tela7')
            }}/>             
    </View>
    );
}
    