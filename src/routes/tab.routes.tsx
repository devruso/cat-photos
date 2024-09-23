import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';
import Home from '../screens/Home/index';
import CatDetails from '../screens/CatDetails/index';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name='Cat Details'
                component={CatDetails}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='plus' color={color} size={size} />,
                    tabBarLabel: 'Details'
                }}
            />
        </Tab.Navigator>
    )
}