const getCats = ({
    id,
    url,
    breeds
} : any ) : any => ({
    id,
    image: url,
    breeds
});

export const getCatsFactory = {
    createFromBackendData: (data: any) : any => getCats(data),
}