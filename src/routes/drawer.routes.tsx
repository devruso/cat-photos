import { createDrawerNavigator} from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen 
            name='home'
            component={TabRoutes}
            options={{
                drawerIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>, 
                drawerLabel: 'Inicio'
            }}
            />
            <Drawer.Screen 
            name='Details'
            component={StackRoutes}
            options={{
                drawerIcon: ({color, size}) => <Feather name='feather' color={color} size={size}/>, 
                drawerLabel: 'Cat Details'
            }}
            />
        </Drawer.Navigator>
    )
}