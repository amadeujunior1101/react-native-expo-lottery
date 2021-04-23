import styled from 'styled-components/native';

const BoxLogo = styled.View`
justify-content: space-between;
flex-direction: row;
align-items: center;
background-color: #FFF;
/* padding-left: 10px;
padding-right: 10px;
padding-bottom: 10px; */
padding: 10px;
`;

const TextLogoTitle = styled.Text`
  font-size: 35px;
  color: #707070;
  font-family: "Helvetica";
  font-weight: bold;
  font-style: italic;
  text-align: left;
  margin-left: 5px;
  margin-right: 5px;
`;

const ViewLineLogo = styled.View`
  background-color: #B5C401;
  margin-top: -5px;
  border-radius: 20px;
  height: 5px;
`;
const ViewBoxIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ViewBoxCartIcon = styled.View`

`;

const TextNumberCartItem = styled.Text`
position: absolute;
margin-top: 0;
/* margin-left: 0; */
z-index: 2;
right: 0;
font: normal bold 18px "Helvetica";
color: #dc3545;
`;

export {
  TextLogoTitle,
  ViewLineLogo,
  BoxLogo,
  ViewBoxIcons,
  ViewBoxCartIcon,
  TextNumberCartItem,
}