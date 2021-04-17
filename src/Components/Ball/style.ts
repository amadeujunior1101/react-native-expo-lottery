import styled from "styled-components/native"

interface DivBallProps {
    bg: string;
};

const Ball = styled.TouchableOpacity<DivBallProps>`
    background: ${(p: DivBallProps) => p.bg === "#adc0c4" ? "#adc0c4" : p.bg};
    /* background: #adc0c4; */
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 5px;
    width: 60px;
    height: 60px;
`;

const SpanBall = styled.Text`
   color: #FFF;
   font-size: 20px;
`;

export { Ball, SpanBall, }