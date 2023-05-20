import {ImageBackground,StyleSheet, } from 'react-native';
import { Text , View , Button,} from "react-native";
import { useNavigation } from '@react-navigation/native';

const image = {uri: 'https://i.pinimg.com/originals/da/8d/4a/da8d4a248391463b23555ee6c85779ec.jpg'};


export function Tela1Screen(){

  const navigation = useNavigation<any>();

    return(
        
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={{textAlign: 'center', color:'#FFFFFF',fontSize:32}}>MARVEL VS DC </Text>
            <Button title="Entre aqui" color="#841584" onPress={function () {
                         navigation.navigate('tela2')
            }}/>
            </ImageBackground>
        </View>
       

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
  
  });