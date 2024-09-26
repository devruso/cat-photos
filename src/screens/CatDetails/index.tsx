import Header from '../../components/Header';
import { Container, Text} from './styles';
import { useNavigation } from '@react-navigation/native';


export default function CatDetails({route} : any) {
  const {name} = route.params || '';
  const navigator = useNavigation();

  return (
    <Container>
        <Text>
          {name}
        </Text>

    </Container>
  );
}
