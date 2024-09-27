import Header from '../../components/Header';
import { Container, Text, StyledImage} from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function CatDetails({route} : CatDetailsProps) {
  const { name, image, breed } = route.params || '';
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Container>
      <Header onPress={() => navigation.navigate('Home')} />
      <StyledImage source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>{breed}</Text>
    </Container>
  );
}
