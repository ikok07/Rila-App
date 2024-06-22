import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../config/constants";

export function VolunteerInfoRow({Icon, name, color = Colors.accent, size = 32, heading, subheading}) {
    return <View style={styles.rootContainer}>
        <View style={styles.iconContainer}>
            <Icon name={name} color={color} size={size} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subheading}>{subheading}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    textContainer: {
        flex: 1,
    },
    heading: {
        fontSize: 16,
        fontWeight: "bold"
    },
    subheading: {
        color: Colors.secondary
    },
    iconContainer: {
        width: 40,
        alignItems: "center"
    }
})
