import {RefreshControl, ScrollView, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../config/constants";
import Animated, {FadeIn, FadeOut} from "react-native-reanimated";
import {useState} from "react";

export default function ErrorComponent(
    {
        icon = <Ionicons name="cloud-offline-sharp" size={36} color={Colors.quaternary} />,
        heading = "Heading text",
        subheading = "Subheading text",
        onReload
    }
) {

    const [refreshing] = useState(false)

    function handleRefresh() {
        if (onReload) onReload()
    }

    return <ScrollView
        contentContainerStyle={{flex: 1, justifyContent: "center", alignItems: "center"}}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
    >
        <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.rootContainer}
        >
            {icon}
            <View style={styles.textContainer}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.subheading}>{subheading}</Text>
            </View>
        </Animated.View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 14
    },
    textContainer: {
        alignItems: "center",
        gap: 5
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subheading: {
        color: Colors.tertiary,
        maxWidth: "60%",
        textAlign: "center"
    }
})