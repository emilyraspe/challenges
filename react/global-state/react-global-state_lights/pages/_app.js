import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialLights = [
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porge", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];

  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightId) {
    const updatedLightArray = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(updatedLightArray);
  }

  function handleLightsOff() {
    const updatedLightArray = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(updatedLightArray);
  }

  function handleLightsOn() {
    const updatedLightArray = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(updatedLightArray);
  }

  const lightCount = lights.filter((light) => light.isOn).length;

  return (
    <Layout>
      <GlobalStyle />

      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        lightCount={lightCount}
        handleLightsOff={handleLightsOff}
        handleLightsOn={handleLightsOn}
      />
    </Layout>
  );
}
