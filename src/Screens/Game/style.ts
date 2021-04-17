import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  padding-left: 15px;
  padding-right: 15px;
`;
const TextTypeGame = styled.Text`
  color: #707070;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Roboto-Black";
  font-weight: bold;
  font-style: italic;
  margin-top: 20px;
`;
const TextChooseGame = styled.Text`
  color: #707070;
  font-size: 19px;
  font-family: "Roboto-Italic";
  font-style: italic;
`;

const ViewButtonsChoose = styled.View`
   margin: 20px 0 20px 0;
   display: flex;
   flex-direction: row;
`;

const ViewScrollButtonsChoose = styled.View`
width: 320px;
display: flex;
overflow-y: scroll;

/* width: 100%; */

`;

const TextDescriptionGame = styled.Text`
    color: #868686;
    font-size: 16px;
    font-family: "Roboto-Italic";
    font-style: italic;
  `;
const ViewBoxBottomBar = styled.View`
  margin-top: 10px;
  align-items: center;
  `;

const ViewBottomBar = styled.View`
  background-color: #C1C1C1;
  border-radius: 20px;
  height: 5px;
  width: 20%;
  `;

const ViewContainerBalls = styled.View`
/* display: grid; */
/* grid-template-columns: repeat(10, 1fr); */
/* grid-auto-rows: 75px;
grid-gap: 5px 8px; */
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap;
/* padding: 0 10px 10px 0; */
margin-top: 20px; 
margin-bottom: 30px;

`;

export {
  Wrapper,
  TextTypeGame,
  TextChooseGame,
  ViewButtonsChoose,
  ViewScrollButtonsChoose,
  TextDescriptionGame,
  ViewBoxBottomBar,
  ViewBottomBar,
  ViewContainerBalls,
}