import { useState } from "react";
import { Button, Container, Text } from "./styles";

export default function PaginationComponent(){
    const [page, setPage] = useState(1);
    return(
        <Container>
            <Button onPress={page > 1 ? ()=>setPage(page-1) : ()=>page}><Text>{"<"}</Text></Button>
            <Text>{page}</Text>
            <Button onPress={()=>setPage(page+1)}><Text>{">"}</Text></Button>
        </Container>
    )
}