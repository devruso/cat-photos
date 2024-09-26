import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CatDetails from '../screens/CatDetails';

//const { Navigator, Screen } = createNativeStackNavigator();

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name='Home'
                component={Home}
            />
            <Stack.Screen 
                name='Cat Details'
                component={CatDetails}
            />
        </Stack.Navigator>
    )
}