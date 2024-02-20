import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import Light from "@/components/Light";
import Lights from "@/components/Lights";

const initialLight = [
  {
    id: 1,
    name: "Living Room",
    isOn: true,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: true,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: true,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: true,
  },
  {
    id: 5,
    name: "Garage",
    isOn: true,
  },
  {
    id: 6,
    name: "Porch",
    isOn: true,
  },
  {
    id: 7,
    name: "Garden",
    isOn: true,
  },
  {
    id: 8,
    name: "Office",
    isOn: true,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLight);

  function toggleLight(lightID) {
    setLights(
      lights.map((light) =>
        lights.id === lightID ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const countLights = lights.map((light) => {
    light.isOn === true ? 1 : 0;
  });

  const lightsOn = lights.map((light) => (light.isOn = true));

  const lightsOut = lights.map((light) => {
    light.isOn == true ? false : false;
  });

  const countSum = countLights.reduce((a, b) => a + b);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        countLights={countLights}
        lightsOn={lightsOn}
        lightsOut={lightsOut}
        countSum={countSum}
      />
    </Layout>
  );
}
