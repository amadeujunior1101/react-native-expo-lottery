import styled from "styled-components/native"

const ViewButton = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #B5C300;
    width: 90px;
    height: 90px;
    border-radius: 100px;
    margin-bottom: 20px;
    border-width: 5px;
    border-color: #FFF;
    box-shadow: 10px 5px 5px black;

    shadow-opacity: 0.8;
    /* shadow-offset: {width: 0, height: 2} */
    shadow-offset: 0px 2px;
    shadow-opacity: 0.23;
    shadow-radius: 2.62px;
    elevation: 4;
`;

export {
    ViewButton,
}