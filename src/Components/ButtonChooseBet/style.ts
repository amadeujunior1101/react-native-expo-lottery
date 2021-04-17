import styled from "styled-components/native"

interface ButtonProps {
    background: string;
    color: string;
    border: string;
};
interface TextProps {
    color: string;
};

const ButtonChoose = styled.TouchableOpacity<ButtonProps>`
    width: 113px;
    height: 34px;
    border-radius: 30px;
    border-width: 0;
    /* border: 2px solid #7f3992; */
    /* cursor: pointer; */
    text-align: center;
    /* font: italic normal bold 14px Helvetica Neue; */
    /* color: #7f3992; */
    margin-right: 20px;

    background: ${(p: ButtonProps) => p.background};
    color: ${(p: ButtonProps) => p.color};
    border: ${(p: ButtonProps) => p.border};
    
    /* outline: none; */
    box-shadow: none;
    justify-content: center;
    align-items: center;
`;

const TextTitleButtonChoose = styled.Text<TextProps>`
color: ${(p: TextProps) => p.color};
`;

export { ButtonChoose, TextTitleButtonChoose }