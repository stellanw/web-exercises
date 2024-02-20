import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ isOn }) {
  return (
    <StyledLights>
      <li>
        <Light isOn={isOn} name="Living Room" />
      </li>
      <li>
        <Light isOn={isOn} name="Kitchen" />
      </li>
      <li>
        <Light isOn={isOn} name="Bedroom" />
      </li>
      <li>
        <Light isOn={isOn} name="Bathroom" />
      </li>
      <li>
        <Light isOn={isOn} name="Garage" />
      </li>
      <li>
        <Light isOn={isOn} name="Porch" />
      </li>
      <li>
        <Light isOn={isOn} name="Garden" />
      </li>
      <li>
        <Light isOn={isOn} name="Office" />
      </li>
    </StyledLights>
  );
}
