import Header from '../../components/Header';
import { Container, Content , Text, TextLabel,StyledImage, TextContainer, TextTitle, Separator} from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function CatDetails({route} : CatDetailsProps) {
  const { image , id} = route.params;
  const {name: breedName, description, temperament} = route.params.breed;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


const temperamentArray = temperament.split(',');

  return (
    <Container>
      <Header onPress={() => navigation.navigate('Home')} />
        <Content
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >
            <StyledImage source={{ uri: image }} />
            <TextContainer>
              <TextTitle>Breed: </TextTitle>
              <TextTitle>{breedName}</TextTitle>
            </TextContainer>
            <Text>{description}</Text>
            <TextContainer>
            { temperamentArray.map((item, index) => {
                return (<TextLabel index={index} key={item}>{item}</TextLabel>)
              })
            } 
            <Separator 
              style={{marginBottom: 20}}
            />
            </TextContainer>
        </Content>
    </Container>
  );
}
