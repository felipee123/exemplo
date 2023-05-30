import * as React from 'react';
import { View, Text, Button,Image, StyleSheet, } from 'react-native';
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


export interface Tela3Screen{
}

export function Tela3Screen (props: Tela3Screen) {
  const navigation = useNavigation<any>();
    return (
      <View style={{justifyContent:'center', flex:1 , alignItems:'center' }}>
      <Text style={{fontSize:29,color:'#0000FF'}}>Qual o Melhor Personagem</Text>
      <View style={styles.tela2ScreenProps}>
        <Image style={styles.imagem} source={require("../../img/download.jpg")} />
        <Image style={styles.imagem} source={require("../../img/batman.webp")} />
                 </View>
                  <Button title="Homem De Ferro 1"  color="#841584" />
                  <Button title="The Batman 2"  color="#841584" />
                  <Button title="Entre aqui" color="#00BFFF" onPress={function () {
                         navigation.navigate('tela4')
            }}/>
                  
          
                  
    </View>
  );
}
