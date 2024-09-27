import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;

export const Content = styled.View`
    width: 100%;
    margin: 30px;
    padding: 20px;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${({theme}) => theme.COLORS.PRIMARY2};
    flex-wrap: wrap;
`

export const Text = styled.Text`
    font-size: 24px;
    margin-top: 10px;
`

export const DescriptionText= styled.Text`
    font-size: 18px;
    color : ${({theme}) => theme.COLORS.TEXT};
`

export const CatCard = styled.TouchableOpacity`
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