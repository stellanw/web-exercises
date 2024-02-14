import styled, { createGlobalStyle } from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";

// const GlobalStyle = createGlobalStyle`
// body {
// display:flex;
//   }
// `;

const DivFlex = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    // <GlobalStyle>
    <DivFlex>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </DivFlex>
    // </GlobalStyle>
  );
}
