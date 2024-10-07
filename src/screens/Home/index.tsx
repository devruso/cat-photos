import {
  Container,
  Content,
  LoadingSpinner,
  SearchContainer,
  SearchInput,
  TextTitle,
} from "./styles";
import CatCardComponent from "../../components/CatCardComponent";
import { FlatList } from "react-native-gesture-handler";
import { useCatData } from "../../hooks/useCatData";
import PaginationComponent from "../../components/PaginationComponent";

export default function Home() {
  const { data: cats, isLoading } = useCatData();

  console.log(cats);

  const renderCats = (cat: any) => {
    return (
      <CatCardComponent
        key={cat.id}
        route={{
          params: {
            id: cat.id,
            name: cat.breeds[0].name,
            image: cat.image,
            breed: {
              name: cat.breeds[0].name,
              description: cat.breeds[0].description,
              temperament: cat.breeds[0].temperament,
            },
          },
        }}
      />
    );
  };

  return (
    <Container>
      <Content>
        <TextTitle>Cat Photos</TextTitle>
        <SearchContainer>
          <SearchInput placeholder="Search a breed" />
        </SearchContainer>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <FlatList
          data={cats}
          renderItem={({ item }) => renderCats(item)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ gap: 20, paddingBottom: 8 }}
        />
        )}
        
      <PaginationComponent/>
      </Content>

    </Container>
  );
}
