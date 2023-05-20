import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tela1Screen } from '../Screens/Tela1';
import { Tela2Screen } from '../Screens/Tela2';
const Stack = createStackNavigator();
export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="tela1" component={Tela1Screen} />
            <Stack.Screen name="tela2" component={Tela2Screen} />
        </Stack.Navigator>
    </NavigationContainer>
)
