import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../config/constants";
import PrimaryInput from "../../components/ui/PrimaryInput";
import {VolunteerApplyForm} from "../../components/Volunteer/VolunteerApplyForm";
import {useCreateVolunteerMutation} from "../../store/slices/volunteerUser";

export default function VolunteerApplyScreen() {


    return <ScrollView>
        <View style={styles.rootContainer} behavior="padding">
            <Image source={require("../../assets/volunteer-apply.png")} style={styles.image} />

            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Включи се сега</Text>
                <Text style={styles.subheading}>Някакъв не много дълъг, но смислен текст, който да не е много дълъг</Text>
            </View>
            <VolunteerApplyForm />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 12,
        paddingVertical: 30
    },
    image: {
        width: "70%",
        height: 200,
        alignSelf: "center"
    },
    headerContainer: {
        gap: 5,
        marginTop: 20,
    },
    heading: {
        fontSize: 27,
        fontWeight: "bold"
    },
    subheading: {
        color: Colors.secondary,
        maxWidth: "85%"
    }
})