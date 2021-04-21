import styled from "styled-components/native";
import { TypeColorProps } from "./types";

const Wrapper = styled.View`
  flex: 1;
  background-color: #F7F7F7;
  padding-left: 15px;
  padding-right: 15px;
`;

const TextTitle = styled.Text`
    text-align: left;
    font: italic normal bold 24px "Helvetica";
    color: #707070;
    text-transform: uppercase;
    margin-top: 20px;
`;

const TextSubTitle = styled.Text`
    text-align: left;
    font: italic normal normal 17px "Helvetica";
    color: #868686;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ViewBoxButtonsChoose = styled.View`
  flex-direction: row;
`;

const ViewBetsScrollList = styled.View`
  flex-direction: column;
  padding-bottom: 130px;
`;

const ViewListGames = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const ViewDivisorElement = styled.View<TypeColorProps>`
    width: 5px;
     height: auto;
    background: ${(p) => p.color && p.color};
     border-radius: 20px;
 `;

const ViewGameDescription = styled.View`
margin: 0 10px 0 10px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const TextNumberList = styled.Text`
  text-align: left;
    font: italic bold 18px "Helvetica";
    color: #868686;
    width: 100%;
`;

const TextInfos = styled.Text`
text-align: left;
font: 17px "Helvetica";
color: #868686;
`;

const TextType = styled.Text<TypeColorProps>`
  color: ${(p) => p.color && p.color};
  font: italic normal bold 20px "Helvetica";
`;

export {
    Wrapper,
    TextTitle,
    TextSubTitle,
    ViewBoxButtonsChoose,
    ViewBetsScrollList,
    ViewListGames,
    ViewDivisorElement,
    ViewGameDescription,
    TextNumberList,
    TextInfos,
    TextType,
}