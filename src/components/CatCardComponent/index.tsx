import {CatCard, CatImage, DescriptionText } from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function CatCardComponent({ route }: CatDetailsProps) {
  const { id, name, image } = route.params;
  const {name: breedName ,  description, temperament} = route.params.breed;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <CatCard
          onPress={() => navigation.navigate('Cat Details',
          {id,name,image, breed:{name, description, temperament}} )}
        >
          <CatImage source={{uri: image}} alt={name} />
          <DescriptionText>{name}</DescriptionText>
          <DescriptionText>{breedName}</DescriptionText>
      </CatCard>
    );
}