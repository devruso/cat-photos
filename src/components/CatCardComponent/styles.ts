import styled from 'styled-components/native';

export const DescriptionText= styled.Text`
    font-size: 18px;
    color : ${({theme}) => theme.COLORS.DARK1};
`

export const CatCard = styled.TouchableOpacity.attrs({
    activeOpacity: 0.1,
})`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: 1px;
    width: 45%;
    border-radius: 20px;
    align-items: center;
    margin: 10px 0px;
    height: 200px;
    border: 2px solid ${({theme}) => theme.COLORS.SECONDARY1};
    overflow: hidden;
`

export const CatImage = styled.Image`
    width: 100%;
    height: 100px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;