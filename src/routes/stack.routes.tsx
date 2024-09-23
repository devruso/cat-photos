import { createNativeStackNavigator} from '@react-navigation/native-stack';

import CatDetails from '../screens/CatDetails';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name='Cat Details'
            component={CatDetails}
            />
        </Stack.Navigator>
    )
}