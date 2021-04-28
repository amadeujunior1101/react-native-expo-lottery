import styled from "styled-components/native"
interface TypeColorProps {
  color: string;
};

const ViewListGames = styled.View`
   flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    /* width: 80%; */
    margin-left: 10px;  
`;

const ViewGameIcon = styled.View`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 50px;
`;

const ViewDivisorElement = styled.View<TypeColorProps>`
   width: 5px;
    height: auto;
    background: ${(p) => p.color && p.color};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;
const ViewGameDescription = styled.View`
  margin: 0 5px 0 10px;
    flex-direction: column;
`;
const TextNumberList = styled.Text`
  text-align: left;
    font: italic bold 18px "Helvetica";
    color: #868686;
    width: 280px;
`;
const TextType = styled.Text<TypeColorProps>`
  color: ${(p) => p.color && p.color};
  font: italic bold 18px "Helvetica";
`;

const ViewTypeTrash = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;

export { ViewListGames, ViewGameIcon, ViewDivisorElement, ViewGameDescription, TextNumberList, TextType, ViewTypeTrash }