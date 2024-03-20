import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      {
        !fontsLoaded && !fontError ?
        <Loading/> :
        <Groups/>
      }
    </ThemeProvider>
  );
}

