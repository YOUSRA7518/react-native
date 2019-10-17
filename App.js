import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading, Asset } from "expo";

import Navigation from "./navigation";
import { Block } from "./components";

// import all used images
const images = [
  require("./assets/icons/1.jpeg"),
  require("./assets/icons/1.jpeg"),
  require("./assets/images/1.jpeg"),
  require("./assets/images/2.jpeg"),
  require("./assets/images/3.jpeg"),
  require("./assets/images/4.jpeg"),
  require("./assets/images/avatar.jpg")
];

export default function App() {
  state = {
    isLoadingComplete: false
  };
  handleRessourcesAsync = async () => {
    // we're caching all the images
    // for better perfomance on the app
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };
  if (this.state.isLoadingComplete && this.props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={this.handleRessourcesAsync}
        onError={error => console.warn(error)}
        onFinish={() => this.setState({ isLoadingComplete: true })}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
