import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons"
import {Colors} from "../../config/constants";
import Animated, {
    FadeInLeft, FadeInRight,
    runOnJS,
    useAnimatedStyle,
    useSharedValue, withSpring
} from "react-native-reanimated";
import {useDispatch, useSelector} from "react-redux";
import {setMessage} from "../../store/slices/appVariables";
import {useEffect, useState} from "react"
import {Gesture, GestureDetector} from "react-native-gesture-handler";

let icon = ""
let color = ""
let heading = ""

export default function ToasterMessage() {
    const {shown, type, text,} = useSelector(state => state.appVariablesReducer.toastMessage)
    const dispatch = useDispatch()
    const offset = useSharedValue(0)
    const [messageTimeout, setMessageTimeout] = useState(null)

    function hideMessage() {
        offset.value = Dimensions.get("screen").width
        clearTimeout(messageTimeout)
        setMessageTimeout(setTimeout(() => {
            dispatch(setMessage({shown: false}))
            offset.value = 0
        }, 700))
    }

    function pauseHideTimeout() {
        clearTimeout(messageTimeout)
    }

    function continueHideTimeout() {
        setMessageTimeout(setTimeout(() => {
            hideMessage()
        }, 5000))
    }

    const pan = Gesture.Pan()
        .onBegin(() => {
            runOnJS(pauseHideTimeout)()
        })
        .onUpdate(event => {
            offset.value = event.translationX
        })
        .onEnd(event => {
            if (Math.abs(event.translationX) < 200) {
                offset.value = 0
                runOnJS(continueHideTimeout)()
            } else runOnJS(hideMessage)()
        })

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            {translateX: withSpring(offset.value)}
        ]
    }))

    useEffect(() => {
        if (!shown) return

        setMessageTimeout(setTimeout(() => {
            hideMessage()
        }, 5000))

        return () => clearTimeout(messageTimeout)
    }, [shown]);

    switch (type) {
        case "success":
            icon = "checkmark-circle"
            color = "#13a688"
            heading = "Success"
            break
        case "info":
            icon = "information-circle"
            color = "#136ea6"
            heading = "Info"
            break
        case "error":
            icon = "alert-circle-sharp"
            color = "#d03c38"
            heading = "Error"
            break
        default:
            icon = "alert-circle-sharp"
            color = "#d03c38"
            heading = "Type not set!"
    }

    if (shown) return <GestureDetector gesture={pan}>
        <Animated.View
            style={[styles.rootContainer, {top: 10}, animatedStyles]}
        >
            <Animated.View
                entering={FadeInLeft}
                exiting={FadeInRight}
                style={styles.innerContainer}
            >
                <View style={styles.shadowContainer}>
                    <Ionicons name={icon} size={32} color={color}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>{heading}</Text>
                        <Text style={styles.text}>{text ? text : "Unknown error occurred, please try again!"}</Text>
                    </View>
                </View>
            </Animated.View>
        </Animated.View>
    </GestureDetector>
}

const styles = StyleSheet.create({
    rootContainer: {
        position: "absolute",
        left: 10,
        right: 10,
        alignItems: "center",
        maxHeight: 125,
    },
    innerContainer: {
        width: "100%",
        height: "100%",
    },
    shadowContainer: {
        elevation: 15,
        shadowColor: "black",
        shadowRadius: 5,
        shadowOpacity: 0.25,
        backgroundColor: "white",
        flexDirection: "row",
        gap: 10,
        borderRadius: 7,
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    textContainer: {
        flex: 1
    },
    heading: {
        fontSize: 20,
        fontWeight: "semibold"
    },
    text: {
        color: Colors.tertiary
    }
})