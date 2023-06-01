import React, { useEffect, useState } from 'react';
import { View, Text,Button,Image, StyleSheet } from 'react-native';
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



export interface Tela5Screen{
}

export function Tela5Screen (props: Tela5Screen) {
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
        <Image style={styles.imagem} source={require("../../img/Mulher-Maravilha.jpg")} />
        <Image style={styles.imagem} source={require("../../img/2e46ead133161b41b17cd701254b4530.jpg")} />
                 </View>
                  <Button title="Mulher Marivilha 1"  color="#841584" onPress={() => {navigation.navigate('tela6') ,adicionarVoto('MulherMarivilha')}}/>
                  <Button title="capitã marvel 2"  color="#841584" onPress={() => {navigation.navigate('tela6') ,adicionarVoto('capitã marvel')}}/>
                  
    </View>
    );
}