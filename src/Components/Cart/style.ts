import styled from "styled-components/native";

const TextInformationCartEmpty = styled.Text`
    flex-direction: row;
    justify-content: center;
    font: normal normal 700 24px "Helvetica";
    color: #707070;
`;

const ViewBoxCartTitle = styled.View`
flex-direction: row;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
`;
const TextCartTitle = styled.Text`
 font: italic normal bold 24px "Helvetica";
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
`;
const TouchableOpacityIconClose = styled.TouchableOpacity`
 justify-content: flex-end;
 flex-direction: row;
  margin-top: 10px;
`;
const ViewTextInformationCartEmpty = styled.View`
 justify-content: center;
 flex-direction: row;
  margin-top: 10px;
`;

const ViewCartTotal = styled.View`
 /* margin: 0 0 auto 10px; */
margin: 10px;
/* border-left: 1px solid #e2e2e2;
border-right: 1px solid #e2e2e2; */
justify-content: space-between;
flex-direction: row;
align-items: center;
`;

const TextCartTotal = styled.Text`
 font: italic normal bold 24px "Helvetica";
    letter-spacing: 0px;
    color: #707070;
    text-transform: uppercase;
`;

const TextTotal = styled.Text`
  text-align: left;
    font: normal normal 300 24px/85px "Helvetica";
    color: #707070;
`;

const TextValueTotal = styled.Text`
 text-align: left;
    font: normal normal 700 24px "Helvetica";
    color: #707070;
`;

const TouchableOpacitySaveButton = styled.TouchableOpacity`
width: auto;
    height: 95px;
    background: #f4f4f4 0% 0%;
    border: 1px solid #e2e2e2;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* margin: 0 0 auto 10px; */
    padding: 15px;
    /* border-radius: 0 0 10px 10px; */
`;
const TextSaveButton = styled.Text`
text-align: center;
    font: italic normal bold 35px "Helvetica";
    color: #27c383;
`;

export {
    TextInformationCartEmpty,
    ViewBoxCartTitle,
    TextCartTitle,
    TouchableOpacityIconClose,
    ViewTextInformationCartEmpty,
    ViewCartTotal,
    TextCartTotal,
    TextTotal,
    TextValueTotal,
    TouchableOpacitySaveButton,
    TextSaveButton,
}