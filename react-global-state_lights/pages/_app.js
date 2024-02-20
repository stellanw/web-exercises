import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(initialLights);

  function handleToggle(id) {
    console.log("a button was clicked...");
    setIsOn((light) => light.id === initialLights.id ? {...light, isOn: !light.isOn})};
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={isOn} toggleLight={handleToggle} />
    </Layout>
  );
}
