import {StyleSheet, Text, TextInput, View} from "react-native";
import {Colors} from "../../config/constants";
import {useState} from "react";

export default function PrimaryInput({label, unit, placeholder, value, setValue, disabled, autoCapitalize = true, keyboardType}) {

    const [isFocused, setIsFocused] = useState(false)

    return <View style={[styles.rootContainer, isFocused && {borderColor: Colors.primary}]}>
        <View style={styles.inputWrapper}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.tertiary}
                value={value}
                onChangeText={setValue}
                editable={!disabled}
                style={[styles.input, disabled && {color: Colors.quaternary}]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
            />
            {unit && <Text style={styles.unit}>{unit}</Text>}
        </View>
        {label && <Text style={[styles.label, isFocused && {color: Colors.primary}]}>{label}</Text>}
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        position: "relative",
        borderWidth: 1,
        borderColor: Colors.lightGray1,
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    input: {
        fontSize: 16,
        flex: 1,
    },
    unit: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.quaternary
    },
    label: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: Colors.bg,
        paddingHorizontal: 5,
        color: Colors.tertiary
    }
})