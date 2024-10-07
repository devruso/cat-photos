import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.PRIMARY1};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  width: 100%;
  flex: 1;
`
export const TextContainer = styled.View`
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const Text = styled.Text`
    font-size: 20px;
    color : ${({theme}) => theme.COLORS.DARK1};
    margin-top: 16px;
    padding: 4px;
`
export const TextTitle = styled.Text`
    font-size: 24px;
    color : ${({theme}) => theme.COLORS.DARK1};  margin-top: 16px;
    text-align: justify;
`

export const TextLabel = styled.Text<{index : number}>`
  color: ${({theme}) => theme.COLORS.DARK1};
  font-size: 16px;
  background-color: ${({theme, index}) =>  theme.COLORS[`LABEL${index % 7 + 1}`]};
  border: 2px solid ${({theme, index}) =>  theme.COLORS[`LABEL${index % 7 + 1}`]};
  border-radius: 8px;
  margin: 4px;
  padding: 1px;
`

export const StyledImage = styled.Image`
  width: 100%;
  height: 350px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
`