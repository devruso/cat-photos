import { NavigationContainer} from '@react-navigation/native';
// import DrawerRoutes from './drawer.routes';
import StackRoutes from './stack.routes';

export default function Routes(){
    {/* Contexto de navegação */}
    return (
        <NavigationContainer>
            {/* Dentro do navigation container se coloca a estratégia de navegação */}
            <StackRoutes />
        </NavigationContainer>
    )
}