import { ThemedText } from "@/components/ThemedText";
import {  useTheme } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";

import { FlatList, Image, TouchableOpacity, View} from "react-native";

export default function HomeScreen() {
  const { colors, dark } = useTheme();
  const router = useRouter();
  const blocksFunctionalities = [
    {
      id: "1",
      describe: "Numérico e símbolos, até 16 caracteres",
      title: "codabar",
      link: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Codabar.svg/1200px-Codabar.svg.png",
    },
    { id: "2", describe: "", title: "code128", link: "" },
    {
      id: "3",
      describe: "Código QR code padrão",
      title: "qr",
      link: "https://cdn-icons-png.flaticon.com/512/8275/8275443.png",
    },
    { id: "4", describe: "", title: "code128", link: "" },
    {
      id: "5",
      describe: "Numérico fixo, exatamente 8 dígitos",
      title: "ean-8",
      link: "https://p7.hiclipart.com/preview/442/57/193/ean-8-barcode-barcode.jpg",
    },
    { id: "6", 
      describe: "Numérico fixo, exatamente 14 dígitos", 
      title: "itf14", 
      link: "" },
  ];

  const ThemedTextCustom = (prop: any) => {
    const color = colors.text;
    return (
  
        <ThemedText
          style={prop.style}
          type="title"
          lightColor={color}
          darkColor={color}
        >
          {prop.text} {prop.value}
        </ThemedText>
 
  
    );
  };

  return (
    <View style={{ backgroundColor: colors.background }}>
      <FlatList
        columnWrapperStyle={{ margin: 10, gap: 20, justifyContent: "center" }}
        numColumns={2}
        style={{ width:"100%"}}
        data={blocksFunctionalities}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPressIn={()=> router.push({
            pathname: "/screens/Camera",
            params:{title:item.title, describe:item.describe}
          })}
            key={item.id}
            style={{
              width: 140,
              marginTop: 20,
              height: 150,
              backgroundColor: dark ? "grey" : "orange",
              borderRadius: 20,
            }}
          >
            <View style={{ margin: "auto" }}>
          
              <ThemedTextCustom
                text={item.title}
    

                style={{
                  fontSize: 13,
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
