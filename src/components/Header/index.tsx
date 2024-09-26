import { TouchableOpacity } from "react-native-gesture-handler";
import { Container, Text, Icon } from "./styles";


export default function Header({onPress}: any){
    return(
        <Container>
            <TouchableOpacity onPress={onPress }>
            <Icon name="caretleft" 
             />
            </TouchableOpacity>
        </Container>
    )
}