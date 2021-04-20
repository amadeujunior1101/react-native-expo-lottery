import styled from "styled-components/native";

const ViewContainerButtons = styled.View`
flex-direction: row;
`;

const ButtonActionGame = styled.TouchableOpacity`
/* height: 52px; */
border-radius: 5px;
border-width: 0;
border: 2px solid #B5C401;
/* padding: 0 5px 0 5px; */
margin-right: 10px;
`;

const TextActionGame = styled.Text`
text-align: center;
font: italic normal bold 16px Helvetica;
color: #B5C401;
margin: 5px;
`;

export {
    ViewContainerButtons,
    ButtonActionGame,
    TextActionGame,
}