import styled from "styled-components/native";

const TextInformationCartEmpty = styled.Text`
    flex-direction: row;
    justify-content: center;
    font: normal normal 300 24px/85px "Helvetica";
    color: #707070;
`;

const ViewScrollList = styled.View`
 overflow-y: scroll;
 max-height: 300px;
`;
export {
    TextInformationCartEmpty,
    ViewScrollList,
}