import {NavigationContainer} from '@react-navigation/native';
import TabRoutes from './tab.routes';

export default function Routes(){
    {/* Contexto de navegação */}
    return (
        <NavigationContainer>
            {/* Dentro do navigation container se coloca a estratégia de navegação */}
            <TabRoutes />
        </NavigationContainer>
    )
}