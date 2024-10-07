interface Cat {
  id: string;
  name: string;
  image: string;
  breed: {
    name :string;
    description: string;
    temperament: string;
  } 
}

interface Cats {
  cats: Cat[];
}

interface RootStackParamList {
     Home: undefined;
    'Cat Details': Cat;
};

interface CatDetailsProps {
    route: {
      params: Cat;
    };
  };

//Necessário criar e tipar o módulo do que tem no arquivo .env a ser importado
declare module '@env' {
  export const THE_CAT_API_KEY: string;
}