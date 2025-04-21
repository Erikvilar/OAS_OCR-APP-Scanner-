import { Tabs} from "expo-router";
import * as React from "react";
import { Platform } from "react-native";
import TabBarBackground from "@/components/ui/TabBarBackground";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "orange", 
        tabBarInactiveTintColor: "#8E8E93", 
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="barcode-scan" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Config"
        options={{
          title: "Configuration",
          tabBarIcon: ({ color }) => (  
            <Entypo name="tools" size={23} color={color} />
          ),
        }}
      />
    
    </Tabs>
  );
}
