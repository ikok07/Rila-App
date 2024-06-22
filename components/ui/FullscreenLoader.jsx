import {ActivityIndicator, StyleSheet, Text} from "react-native";
import {Colors} from "../../config/constants";
import {FadeIn, FadeOut} from "react-native-reanimated";
import Animated from "react-native-reanimated";

export function FullscreenLoader({loadingText = "Loading"}) {

    return <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.rootContainer}>
        <ActivityIndicator size={"large"} color={Colors.primary}/>
        <Text style={styles.loadingText}>{loadingText}</Text>
    </Animated.View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    loadingText: {
        fontSize: 18
    }
})