import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tela1Screen } from '../Screens/Tela1';
import { Tela2Screen } from '../Screens/Tela2';
import { Tela3Screen } from '../Screens/Tela3';
import { Tela4Screen } from '../Screens/Tela4';
import { Tela5Screen } from '../Screens/Tela5';
import { Tela6Screen } from '../Screens/Tela6';



export type Navegacaotype ={
    tela1: undefined,
    tela2: undefined,
    tela3: undefined,
    tela4: undefined,
    tela5: undefined,
    tela6: undefined,
    tela7: undefined,
}
 

const Stack = createStackNavigator<Navegacaotype>();
export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="tela1" component={Tela1Screen} />
            <Stack.Screen name="tela2" component={Tela2Screen} />
            <Stack.Screen name="tela3" component={Tela3Screen} />
            <Stack.Screen name="tela4" component={Tela4Screen} />
            <Stack.Screen name="tela5" component={Tela5Screen} />
            <Stack.Screen name="tela6" component={Tela6Screen} />
            
            
        </Stack.Navigator>
    </NavigationContainer>
)
