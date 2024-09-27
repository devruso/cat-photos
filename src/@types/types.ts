type Cat = {
  name: string;
  image: string;
  breed: string;
}

type RootStackParamList = {
    Home: undefined;
    'Cat Details': Cat;
};

type CatDetailsProps = {
    route: {
      params: Cat;
    };
  };