import * as React from 'react';
import { View, Text, Button,Image, StyleSheet} from 'react-native';
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


export interface Tela4Screen{
}

export function Tela4Screen (props: Tela4Screen) {
  const navigation = useNavigation<any>();
    return (
      <View style={{justifyContent:'center', flex:1 , alignItems:'center' }}>
      <Text>Qual o Melhor Personagem</Text>
      <View style={styles.tela2ScreenProps}>
        <Image style={styles.imagem} source={require("../../img/deadpool.jpg")} />
        <Image style={styles.imagem} source={require("../../img/pacificador.jpg")} />
                 </View>
                  <Button title="Deadpool 1"  color="#841584" />
                  <Button title="Pacificador 2"  color="#841584" />
                  <Button title="Entre aqui" color="#00BFFF" onPress={function () {
                         navigation.navigate('tela5')
            }}/>
                  
          
                  
    </View>
    );
}