import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={"light-content"}
        translucent
        backgroundColor={"transparent"}
      />
      {
        !fontsLoaded && !fontError ?
        <Loading/> :
        <NewGroup/>
      }
    </ThemeProvider>
  );
}

