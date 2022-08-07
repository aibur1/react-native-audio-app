import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Flashmessage from "react-native-flash-message";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
          <Flashmessage position="top" floating statusBarHeight={30} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.purple,
    justifyContent: "center",
  },
});
