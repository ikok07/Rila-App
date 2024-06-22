import {View, Text, StyleSheet} from "react-native";
import {Colors} from "../../config/constants";

export function SettingsCard({label, children, style}) {
    return <View style={styles.rootContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={style}>
            {children}
        </View>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.bg,
        paddingHorizontal: 15,
        paddingVertical: 20,
        gap: 25,
        borderRadius: 7,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: 10,
        elevation: 15,
        marginBottom: 20
    },
    label: {
        fontSize: 20,
        fontWeight: "bold"
    }
})