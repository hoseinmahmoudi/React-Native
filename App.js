import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/peakpx-2.jpg")} />
      <Image
        style={{
          width: 200,
          height: 200,
          alignSelf: "baseline",
          top: 100,
          position: "absolute",
        }}
        source={require("./assets/Logo.png")}
      />

      <Text
        style={{
          color: "white",
          position: "absolute",
          top: 300,
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Test Logo
      </Text>

      <View
        style={{
          width: "100%",
          bottom: 100,
          position: "relative",
          alignSelf: "flex-end",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 100,
            backgroundColor: "skyblue",
            height: 50,
            borderBottomStartRadius: 10,
            borderTopStartRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 100,
            backgroundColor: "gray",
            height: 50,
            borderBottomEndRadius: 10,
            borderTopEndRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: "0.9",
  },
});
