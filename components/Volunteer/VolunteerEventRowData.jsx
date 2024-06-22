import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../config/constants";
import {FontAwesome6, Ionicons} from "@expo/vector-icons";

export default function VolunteerEventRowData({Icon, iconName, iconSize = 16, label, labelSize = 12}) {
    return <View style={styles.rootContainer}>
        <Icon name={iconName} color={Colors.secondary} size={iconSize} />
        <Text style={[styles.label, {fontSize: labelSize}]}>{label}</Text>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    label: {
        color: Colors.secondary,
    }
})