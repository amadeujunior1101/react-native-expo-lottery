import React from "react";
import { Text } from "react-native";
import { ButtonChoose, TextTitleButtonChoose } from "./style"
import { Props } from "./types"

function ButtonChooseBet(props: Props) {
  // console.log("Id:", props.id)
  return (
    <ButtonChoose
      // style={{marginBottom: 10}}
      // id={props.id}
      background={Number(props.id) === props.active ? `${props.item.color}` : "#FFF"}
      color={Number(props.id) !== props.active ? `${props.item.color}` : "#FFF"}
      border={`2px solid ${props.item.color}`}
      onPress={() => { props.func(Number(props.id)) }}
    >
      <TextTitleButtonChoose
        color={Number(props.id) !== props.active ? `${props.item.color}` : "#FFF"}
      >{props.item.type}</TextTitleButtonChoose>
    </ButtonChoose>
  );
};

export default ButtonChooseBet;