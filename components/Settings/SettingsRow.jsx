import {Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../config/constants";
import {useNavigation} from "@react-navigation/native";

export default function SettingsRow({icon, label, navigateTo, onPress, hideBottomBorder}) {
    const navigation = useNavigation()

    function handleClick() {
        if (onPress) {
            onPress()
            return
        }
        navigation.navigate(navigateTo)
    }

    return <Pressable style={({pressed}) => [styles.rootContainer, pressed && styles.pressed, hideBottomBorder && {borderBottomWidth: 0}]} onPress={handleClick}>
        <View style={styles.mainContainer}>
            <Ionicons name={icon} size={28} color={Colors.primary} />
            <Text style={styles.label}>{label}</Text>
        </View>
        <Ionicons name="arrow-forward" size={24} color={Colors.quaternary} />
    </Pressable>
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "white",
        borderBottomColor: Colors.lightGray2,
        borderBottomWidth: 1,
    },
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    label: {
        fontSize: 18
    },
    pressed: {
        backgroundColor: Colors.bgAlt
    }
})