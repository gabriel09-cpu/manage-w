import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
  
  "GoogleSans-Regular": require("../assets/fonts/GoogleSansCode-Regular.ttf"),
  "GoogleSans-Bold": require("../assets/fonts/GoogleSansCode-Bold.ttf"),
  "GoogleSans-Italic": require("../assets/fonts/GoogleSansCode-Italic.ttf"),
  "GoogleSans-BoldItalic": require("../assets/fonts/GoogleSansCode-BoldItalic.ttf"),
  "GoogleSans-Light": require("../assets/fonts/GoogleSansCode-Light.ttf"),
  "GoogleSans-LightItalic": require("../assets/fonts/GoogleSansCode-LightItalic.ttf"),
  "GoogleSans-Medium": require("../assets/fonts/GoogleSansCode-Medium.ttf"),
  "GoogleSans-MediumItalic": require("../assets/fonts/GoogleSansCode-MediumItalic.ttf"),
  "GoogleSans-SemiBold": require("../assets/fonts/GoogleSansCode-SemiBold.ttf"),
  "GoogleSans-SemiBoldItalic": require("../assets/fonts/GoogleSansCode-SemiBoldItalic.ttf"),
  "GoogleSans-ExtraBold": require("../assets/fonts/GoogleSansCode-ExtraBold.ttf"),
  "GoogleSans-ExtraBoldItalic": require("../assets/fonts/GoogleSansCode-ExtraBoldItalic.ttf"),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}