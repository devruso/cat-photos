import "react-native-gesture-handler";
import Routes from "./src/routes/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import light from "./src/themes/light";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import reactotron from "reactotron-react-native";


if (__DEV__) {
  reactotron.connect();
}

export default function App() {
  const client = new QueryClient();
  
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={client}>
        <StatusBar style="dark" />
        <ThemeProvider theme={light}>
          <Routes />
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
