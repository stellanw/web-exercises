import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font";

const lora = Lora({
  subset: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family:${lora.style.fontFamily}, serif;
  }
`;
