import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { Lights } from "@/components/Lights";

export default function Light({ name, isOn, toggleLight, id }) {
  // const [isOn, setIsOn] = useState(false);

  // function handleToggle() {
  //   console.log("a button was clicked...");
  //   // setIsOn((isOn) => !isOn);
  // }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
