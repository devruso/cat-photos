import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`

export const Button = styled.TouchableOpacity`
    padding: 12px;
    background-color: ${({theme}) => theme.COLORS.LABEL1};
    border-radius: 8px;
    margin: 8px 4px;
`

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.SECONDARY2};
    font-size: 16px;
    font-weight: bold;
`