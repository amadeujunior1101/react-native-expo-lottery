import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  padding-left: 15px;
  padding-right: 15px;
`;

const TextAuthenticationTitle = styled.Text`
  font-size: 30px;
  color: #707070;
  font-family: "Helvetica";
  font-weight: bold;
  font-style: italic;
  margin-top: 10px;
`;
const ViewCardLogin = styled.View`
  margin-top: 20px;
  background-color: #FFF;
  border-radius: 10px;
  border-width: 2px;
  border-color: #EBEBEB;
`;
const TextInputEmailCardLogin = styled.TextInput`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: #707070;
    font-family: "Helvetica";
    font-weight: bold;
    font-style: italic;
    padding: 20px;
`;
const TextInputPasswordCardLogin = styled.TextInput`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: #707070;
    font-family: "Helvetica";
    font-weight: bold;
    font-style: italic;
    padding: 20px;
    width: 80%;
`;
const ViewBoxLogIn = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;

`;

const TextTitleButtonLogIn = styled.Text`
   font-size: 30px;
    color: #B5C401;
    font-weight: bold;
    font-style: italic;
    margin-right: 15px;
`;

const BoxLogo = styled.View`
justify-content: center;
align-items: center;
margin-top: 20px;
`;
const ViewLineLogo = styled.View`
  width: 90px;
  height: 5px;
  background-color: #B5C401;
  margin-top: -5px;
  border-radius: 20px;
`;

const TouchableOpacitySave = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export {
    Wrapper,
    TextAuthenticationTitle,
    ViewCardLogin,
    TextInputEmailCardLogin,
    TextInputPasswordCardLogin,
    ViewBoxLogIn,
    TextTitleButtonLogIn,
    TouchableOpacitySave,
    BoxLogo,
    ViewLineLogo,
}