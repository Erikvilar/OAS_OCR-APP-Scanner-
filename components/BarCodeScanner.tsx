import { useEffect, useState } from "react";

import { Camera, CameraView, BarcodeScanningResult } from "expo-camera";
import { TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
export default function BarCodeScanner() {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [hasScanned, setHasScanned] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const getCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  const handleActions = (action: boolean) => {
    setHasScanned(action);
  };

  const enableCamera = () => setDisabled((prev) => !prev);

  return (
    <View>
      {!disabled ? (
        <TouchableOpacity onPressIn={enableCamera}>
          <View
            style={{
              backgroundColor: "orange",
              width: 190,
              padding: 5,
              margin: "auto",
              borderRadius: 10,
              marginBottom:25,
              marginTop:10
            }}
          >
            <Text style={{ color: "white", fontWeight: 600, fontSize: 18,textAlign:"center" }}>
              Toque para escanear
            </Text>
            <Entypo
              name="camera"
              size={35}
              color="white"
              style={{ margin: "auto" }}
            />
          </View>
          <View
            style={{
              width: 300,
              height: 500,
              margin: "auto",
              boxShadow: "0px 0px 10px 5px blue",
              borderRadius: 20,
            }}
          ></View>
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity onPressIn={enableCamera}>
            <AntDesign
              name="closecircle"
              size={30}
              color="red"
              style={{ margin: "auto" }}
            />
          </TouchableOpacity>
          <CameraView
            onBarcodeScanned={(scanningResult) => setHasPermission(true)}
            facing="back"
            style={{
              width: 300,
              height: 500,
              margin: "auto",
              boxShadow: "0px 0px 10px 5px orange",
              borderRadius: 20,
            }}
            barcodeScannerSettings={{
              barcodeTypes: [
                "qr",
                "pdf417",
                "code128",
                "aztec",
                "codabar",
                "code93",
                "ean8",
                "itf14",
                "itf14",
                "code39",
                "upc_e",
                "ean13",
                "datamatrix",
                "upc_a",
              ],
            }}
          />
        </View>
      )}
    </View>
  );
}
