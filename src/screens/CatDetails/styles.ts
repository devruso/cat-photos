import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND1};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
    font-size: 24px;
    color : ${({theme}) => theme.COLORS.DARK1};
`

export const StyledImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;