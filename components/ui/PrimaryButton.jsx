import {ActivityIndicator, Pressable, StyleSheet, Text} from "react-native";
import Animated, { FadeIn, FadeOut} from "react-native-reanimated";
import {Colors} from "../../config/constants";

export default function PrimaryButton({children, style, textStyle, onPress, disabled, loading}) {
    return <Pressable onPress={onPress} style={({pressed}) => [styles.rootContainer, pressed && styles.pressed, disabled && styles.disabled,style]} >
        {loading ? <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
            <ActivityIndicator size="small" color={Colors.textLight} />
        </Animated.View> : <Text style={[styles.text, textStyle]}>{children}</Text>}
    </Pressable>
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.accent,
        paddingVertical: 10,
        borderRadius: 7
    },
    pressed: {
        opacity: 0.8
    },
    text: {
        color: Colors.textLight,
        textAlign: "center",
        fontSize: 18,
    },
    disabled: {
        backgroundColor: Colors.quaternary
    }
})