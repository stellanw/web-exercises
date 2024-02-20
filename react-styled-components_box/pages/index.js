import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function HomePage() {
  return (
    <DivFlex>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </DivFlex>
  );
}
