import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { SlideInDown } from "react-native-reanimated";

const App = () => {
  const gesture = Gesture.Pan()
    .onStart(() => {
      console.log("STARTED");
    })
    .onUpdate(e => {
      console.log(e);
    });
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureDetector gesture={gesture}>
          <View
            collapsable={false}
            style={{
              borderColor: "red",
              borderWidth: 1,
              height: 200,
              width: 200,
              backgroundColor: "yellow",
            }}
          >
            <Animated.View
              entering={SlideInDown.duration(1000)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Press</Text>
            </Animated.View>
          </View>
        </GestureDetector>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
