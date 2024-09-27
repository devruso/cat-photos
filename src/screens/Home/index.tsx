import { NavigationProp, useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import {CatCard, CatImage, DescriptionText , Container, Content, Text} from './styles'


export default function Home() {
  const cats: Cat[] = [
    { name: 'Cat 1', breed: 'Breed 1', image: 'https://via.placeholder.com/150' },
    { name: 'Cat 2', breed: 'Breed 2', image: 'https://via.placeholder.com/150' },
    { name: 'Cat 3', breed: 'Breed 3', image: 'https://via.placeholder.com/150' },
    { name: 'Cat 4', breed: 'Breed 4', image: 'https://via.placeholder.com/150' },
    { name: 'Cat 5', breed: 'Breed 5', image: 'https://via.placeholder.com/150' },
  ];  
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (    
    <Container>
      <Content>
          {cats.map((cat, index) => {
            return (
              <CatCard key={index}
              onPress={() => navigation.navigate('Cat Details', cat)}

              >
                <CatImage source={{uri: cat.image}} alt={cat.name} />
                <DescriptionText>{cat.name}</DescriptionText>
                <DescriptionText>{cat.breed}</DescriptionText>
            </CatCard>
            );
          })}
      </Content>
    </Container>
  );
}


