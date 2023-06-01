import React, { useEffect, useState } from 'react';
import { View, Text, Button,Image, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, get, set, } from 'firebase/database';
import { db } from '../../../config'

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
  useEffect(() => {
    const fetchData = async () => {
     const itemsRef  = ref(db, 'votos');
     const snapshot = await get(itemsRef)
     if (snapshot.exists()) {
     const data = snapshot.val();
   console.log(data);
    } else {
   console.log("No data available");
    }
     console.log(itemsRef)
     }
     fetchData();
   }, []);
   const adicionarVoto = async (superheroi: string) => {

    const itemsRef = ref(db, 'votos');
        const snapshot = await get(itemsRef);
        if (snapshot.exists()) {
        const data = snapshot.val();
        if (data[superheroi]) {
        data[superheroi] += 1;
        } else {
        data[superheroi] = 1;
        }
        await set(itemsRef, data);
        console.log("Voto adicionado com sucesso!");
        } else {
        console.log("No data available");
        }
        console.log(itemsRef);
   }
    return (
      <View style={{justifyContent:'center', flex:1 , alignItems:'center' }}>
      <Text style={{fontSize:29,color:'#0000FF'}}>Qual o Melhor Personagem</Text>
      <View style={styles.tela2ScreenProps}>
        <Image style={styles.imagem} source={require("../../img/download.jpg")} />
        <Image style={styles.imagem} source={require("../../img/batman.webp")} />
                 </View>
                  <Button title="Homem De Ferro 1"  color="#841584" onPress={() => {navigation.navigate('tela4') ,adicionarVoto('HomemDeFerro')}}/>
                  <Button title="The Batman 2"  color="#841584" onPress={() =>{navigation.navigate('tela4') ,adicionarVoto('TheBatman')}} />
            
    </View>
  );
}
