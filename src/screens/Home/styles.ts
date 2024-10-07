import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    width: 100%;
    margin-top: 30px;
    flex: 1;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.PRIMARY2};
`

export const Text = styled.Text`
    font-size: 24px;
    margin-top: 10px;
`

export const TextTitle = styled.Text`
    font-size: 36px;
    margin-top: 10px;
    color: ${({theme}) => theme.COLORS.DARK1};
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`

export const SearchContainer = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const SearchInput = styled.TextInput`
    width: 80%;
    height: 40px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: 10px;
    margin-right: 10px;
`

export const LoadingSpinner = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.COLORS.DARK1,
    size: 'large',
  }))`
    margin-top: 20px;
  `;