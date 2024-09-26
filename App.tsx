import "react-native-gesture-handler";

import Routes from "./src/routes/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import light from "./src/themes/light";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="dark" />
      <ThemeProvider theme={light}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
