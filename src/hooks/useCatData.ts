import { useQuery } from "@tanstack/react-query";
import { getCats } from "../services/api";


// passar dados
export function useCatData(){
    return useQuery({
        queryKey: ['cats'],
        queryFn: () => getCats(1,10),
        retry: 2, // nº de tentativas caso não funcione a chamada antes de retornar erro
        staleTime: 1000 * 60 * 5
    })
}