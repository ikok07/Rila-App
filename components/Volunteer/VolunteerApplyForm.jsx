import PrimaryInput from "../ui/PrimaryInput";
import {StyleSheet, View} from "react-native";
import PrimaryButton from "../ui/PrimaryButton";

export function VolunteerApplyForm() {
    return <View style={styles.rootContainer}>
        <View style={styles.row}>
            <PrimaryInput label="Име" />
            <PrimaryInput label="Фамилия" />
        </View>
        <View style={styles.col}>
            <PrimaryInput label="Имейл" placeholder="youremail@email.com" />
            <PrimaryInput label="Телефон" placeholder="+359..." />
            <PrimaryInput label="Населено място" placeholder="София..." />
        </View>

        <PrimaryButton style={styles.buttonContainer}>Потвърждаване</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
      marginTop: 30
    },
    row: {
        flexDirection: "row",
        gap: 15,
        marginBottom: 15
    },
    col: {
        gap: 15,
    },
    buttonContainer: {
        marginTop: 25
    }
})
