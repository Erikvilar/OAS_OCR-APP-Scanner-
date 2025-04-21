import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useTheme,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useLocalSearchParams } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image,  TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";


SplashScreen.preventAutoHideAsync();

type CameraScreenTitle ={
  title:string
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const darkmode = (toggler: () => void) => {
   
    return (
      <TouchableOpacity
        onPressIn={toggler}
        style={{
          width: 120,
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
          
        }}
      >
        <View
          style={{
            width: 115,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"space-between",
          }}
        >
          {isDarkMode ? (
            <>
              <ThemedText style={{color:"white", fontSize:13,fontWeight:600,width:90}}>Modo Claro</ThemedText>
              <Entypo name="light-down" size={25} color="orange" style={{width:25}}/>
            </>
          ) : (
            <>
              <ThemedText style={{color:"black", fontSize:13,fontWeight:600,width:90}}>Modo Noturno</ThemedText>
              <MaterialIcons name="dark-mode" size={25} color="#213448" style={{width:25}} />
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const logoFunction = () => (
    <View style={{ padding: 5 }}>
      <Image
        source={require("../assets/images/logoapp.png")}
        style={{ width: 90, height: 80 }}
      />
    </View>
  );

  return (
    <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerTitle: "",
            headerLeft: () => logoFunction(),
            headerRight: () => darkmode(toggleTheme),
          }}
        />
        <Stack.Screen name="Config" />
        <Stack.Screen name="screens/Camera" options={{title:""}} />
      </Stack>
     
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
