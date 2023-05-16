import{Statusbar} from 'expo-Status-bar'
import{styleSheet, tex, view} from 'react-navive'
import react, {useEffect, useState} from 'react'

export default function app(){
    const [objetos,setarObjetos]= useState([{
        nomes:['academia', 'conta de luz','conta de Água' ], 
        valores:['95','150','100']
    }]);

 return(
    <view style={styles.container}>
        <Text>
        {
            objetos.map(function(e,val){
                return val

            })
        }
        </Text>
      
    </view>
 )
}    

const style = styleSheet.create({
    container:{
        flex: 1,
        backgraundColor:'#fff',
        alignItems: 'center',
    },
})
