import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  /* background-color: #808080; */
  padding-left: 15px;
  padding-right: 15px;
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
  margin-top: 10px;
`;
const ViewCardLogin = styled.View`
  margin-top: 20px;
  background-color: #FFF;
  border-radius: 10px;
  /* margin-left: 20px;
  margin-right: 20px; */
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
const ViewBoxLogIn = styled.View`
  /* background-color: #808080; */
  padding: 20px;
  justify-content: center;
  align-items: center;

`;

const ViewBoxForgot = styled.View`
  width: 100%;
  margin-bottom: 20px;
  text-align: right;
`;

const TextTitleButtonLogInForgot = styled.Text`
   font-size: 15px;
    color: #707070;
    font-family: "Helvetica";
    font-style: italic;
    text-align: right;
`;

const TextTitleButtonLogIn = styled.Text`
   font-size: 30px;
    color: #B5C401;
    font-weight: bold;
    font-style: italic;
    margin-right: 15px;
`;
const ButtonSignUp = styled.TouchableOpacity`
margin: 15px;
flex-direction: row;
align-items: center;
justify-content: center;
`;
const TextTitleButtonSignUp = styled.Text`
  font-size: 35px;
    color: #707070;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    margin-left: 15px;
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
// const ViewFooter = styled.View`
//   /* width: 90px; */
//   border-width: 2px;
//   border-color: #EBEBEB;
// `;
const TextTitleFooter = styled.Text`
  font-size: 15px;
  padding: 10px;
  color: #707070;
  text-align: center;
  background-color: #F7F7F7;
  /* position: relative; */
`;



export {
  Wrapper,
  TextLogoTitle,
  TextAuthenticationTitle,
  ViewCardLogin,
  TextInputEmailCardLogin,
  TextInputPasswordCardLogin,
  ViewBoxLogIn,
  TextTitleButtonLogIn,
  ButtonSignUp,
  TextTitleButtonSignUp,
  BoxLogo,
  ViewLineLogo,
  TextTitleButtonLogInForgot,
  ViewBoxForgot,
  // ViewFooter,
  TextTitleFooter,
}