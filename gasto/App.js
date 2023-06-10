import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, TextInput, Button } from 'react-native';
import React, {useEffect,useState} from 'react';



export default function App() {
  const[objetos,setarObjetos]= useState([{
    nomes:['Futebol','hotel','raupa'],
    valores:[10,23,34]
  }]);

  const[valorDevido,setValorDevido ] =useState(0);
  const[nomeDespesa,setNomeDespesa] = useState(0);
  const[valorDespesa,setValorDespesa]= useState(0);
  useEffect(()=>{
    var valorAtual =0;
    for(let i = 0; i < objetos[0].valores.length;i++){
      valorAtual+=objetos[0].valores[i];
    }
    setValorDevido (valorAtual);
    },[])

    const addDespesa = ()=>{
      setarObjetos([{nomes:[...objetos[0].nomes,nomeDespesa],valores:[...objetos[0].valores,valorDespesa]}])
      setValorDevido(parseInt(valorDevido)+parseInt(valorDespesa));
      setNomeDespesa('');
      setValorDespesa('');
      }
    const deletarDespesa =(index)=>{

      setarObjetos([
        {
          nomes: objetos[0].nomes.filter(function(e,val){
            if(val !==index){
             return true;
            }else{
              return false;
            }
          }),
          valores: objetos[0].valores.filter(function(e,val){
              if(val !==index){
               return true;
              }else{
                setValorDevido(valorDevido-e);
                return false;
              }
          }),

        }
      ])

    }


  return (
    <View>
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={{fontSize:30, color:'#000000'}}>Bem-Vindo</Text>
      </View>
          <View >
     <Text style={{fontSize:20, color:'#000000'}}>Quanto voce deve: R${valorDevido}</Text>
      </View>

      <View>
        <TextInput onChangeText={(text)=>setNomeDespesa(text)} style={{width:'100%', height: 30,backgroundColor:'white'}}placeholder='Sua despesa...'></TextInput>
      </View>
      <View>
        <TextInput onChangeText={(text)=>setValorDespesa(text)} style={{width:'100%', height: 30,backgroundColor:'white',marginTop:10}}placeholder='Sua valor...'></TextInput>
      </View>
      <View>
        <Button onPress={()=>addDespesa()}title='Adicionar Despesa!'></Button>
      </View>
     </SafeAreaView>
     <View style={styles.containerDados}>
     {
      objetos[0].nomes.map((e,val)=>{
        return(
          <View style={{borderBottomColor:'black', borderBottomWidth:1,marginBottom:10,paddingBottom:10,paddingLeft:30,flexDirection:'row',justifyContent:'space-between'}}>
          <Text>{e}:R${objetos[0].valores[val]},00</Text>
          <TouchableOpacity onPress={()=>deletarDespesa(val)}/><AntDesign name="delete" size={24} color="black"/>
        </View>
        )
      })
     }
     </View>
     </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding:25,
    backgroundColor: '#00FFFF',
   
    
  },
  containerDados:{
    padding:50,

  }
});
