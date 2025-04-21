import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { CameraView, Camera } from "expo-camera";
import BarCodeScanner from "@/components/BarCodeScanner";
type CameraScreenTitle = {
  title: string;
  describe:string;
};

export default function CameraScreen() {
  const { title,describe } = useLocalSearchParams<CameraScreenTitle>();
  const { colors, dark } = useTheme();

  const ThemedTextCustom = (prop: any) => {
    return (
      <ThemedText
        type={prop.title ? "title" : "default"}
        style={prop.style}
        lightColor={colors.text}
        darkColor={colors.text}
      >
        {prop.title}
        {prop.text}
      </ThemedText>
    );
  };

  return (
    <>
    <View
      style={{
        display: "flex",
        width: "95%",
        height: 100,
        padding: 5,
        margin: 5,
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: dark ? "grey" : "orange",
      }}
    >
      <ThemedTextCustom title={title} style={{TextAlign:"center"}} />
      <ThemedTextCustom
        style={{ fontSize: 12, margin:10 }}
        text={describe}
      />
    </View>

    <View>
      <BarCodeScanner/>
      </View>
    </>
  );
}

