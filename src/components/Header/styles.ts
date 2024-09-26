import styled from 'styled-components/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: #f1f1f1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Text = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #333;
`;

export const Icon = styled(AntDesign)`
  font-size: 24px;
  color: #121212;
`;
