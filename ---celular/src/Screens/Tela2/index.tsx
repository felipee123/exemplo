import * as React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const nav = useNavigation<any>();

const styles = StyleSheet.create({
  tela2ScreenProps: {
    flexDirection: 'row',
  },
  imagem: { 
    width: 150, 
    height: 250 
  }
});

export interface Tela2ScreenProps {
}


export function Tela2Screen(props: Tela2ScreenProps) {
  return (
    <View style={{justifyContent:'center', flex:1 , alignItems:'center' }}>
      <Text>Qual o Melhor Personagem</Text>
      <View style={styles.tela2ScreenProps}>
        <Image style={styles.imagem} source={require("../../img/capiao_america.jpg")} />
        <Image style={styles.imagem} source={require("../../img/Superman.jpg")} />
                 </View>
                  <Button title="capiao America 1"  color="#841584" />
                  <Button title="The Batman 2"  color="#841584" />
                  
          
                  
    </View>
  );
}
