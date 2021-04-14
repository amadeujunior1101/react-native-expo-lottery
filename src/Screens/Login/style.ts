import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  /* background-color: #808080; */
  /* padding-left: 10px;
  padding-right: 10px; */
  /* align-items: center;
  justify-content: center; */
`;
const TextLogoTitle = styled.Text`
  font-size: 40px;
  color: #707070;
  font-family: "Helvetica";
  font-weight: bold;
  font-style: italic;
`;
const TextAuthenticationTitle = styled.Text`
  font-size: 30px;
  color: #707070;
  font-family: "Helvetica";
  font-weight: bold;
  font-style: italic;
  margin-top: 20px;
`;
const ViewCardLogin = styled.View`
  margin-top: 20px;
  background-color: #FFF;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-width: 2px;
  border-color: #EBEBEB;
  /* padding: 10px; */
`;
const TextInputEmailCardLogin = styled.TextInput`
    /* padding-top: 10px; */
    /* padding-bottom: 10px; */
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
    /* padding-top: 0px; */
    /* padding-bottom: 10px; */
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: #707070;
    font-family: "Helvetica";
    font-weight: bold;
    font-style: italic;
    padding: 20px;
`;
const ButtonLogIn = styled.TouchableOpacity`
  /* background-color: #808080; */
  padding: 20px;
  justify-content: center;
  align-items: center;

`;
const TextTitleButtonLogInForgot = styled.Text`
   font-size: 15px;
    color: #707070;
    font-family: "Helvetica";
    font-weight: bold;
    font-style: italic;
`;
const TextTitleButtonLogIn = styled.Text`
   font-size: 30px;
    color: #B5C401;
    font-family: "Helvetica";
    font-weight: bold;
    font-style: italic;
`;
const ButtonSignUp = styled.TouchableOpacity`
  /* background-color: #808080; */
`;
const TextTitleButtonSignUp = styled.Text`
  
`;
const BoxLogo = styled.View`
justify-content: center;
align-items: center;
margin-top: 60px;
`;
const ViewLineLogo = styled.View`
  width: 90px;
  height: 5px;
  background-color: #B5C401;
  margin-top: -5px;
  border-radius: 20px;
`;


export {
    Wrapper,
    TextLogoTitle,
    TextAuthenticationTitle,
    ViewCardLogin,
    TextInputEmailCardLogin,
    TextInputPasswordCardLogin,
    ButtonLogIn,
    TextTitleButtonLogIn,
    ButtonSignUp,
    TextTitleButtonSignUp,
    BoxLogo,
    ViewLineLogo,
    TextTitleButtonLogInForgot
}