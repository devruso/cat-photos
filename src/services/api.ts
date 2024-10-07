import axios, { AxiosPromise } from 'axios';
import { THE_CAT_API_KEY} from '@env'
import { getCatsFactory } from './catsFactory';

const BASE_URL = 'https://api.thecatapi.com/v1';  
const IMAGES = '/images/search';
const IMAGES_PARAMS = '?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&'

const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        'x-api-key': `${THE_CAT_API_KEY}`
    }
})

export async function getCats(page: number, limit: number): Promise<Cats> {
    try {
        const response = await api.get(`${IMAGES}${IMAGES_PARAMS}`, {
         params : {
          page: page,
          limit: limit
         }
        });     
        console.log('RESPONSE DATAAAAAAAAA:               ',response.data)
        return response.data.map((catsData : any) => getCatsFactory.createFromBackendData(catsData));

      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
        throw error;
      }
}