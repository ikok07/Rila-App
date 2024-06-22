import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import { Colors } from "../../config/constants";
import VolunteerInfo from "../../components/Volunteer/VolunteerInfo";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function VolunteerMainScreen({navigation}) {

    function handleApplyNow() {
        navigation.navigate("VolunteerApplyScreen")
    }

    return <ScrollView>
        <View style={styles.rootContainer}>
            <Image source={require("../../assets/volunteer.png")} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.heading}>Доброволческа програма</Text>
                <Text style={styles.subheading}>Присъедини се към доброволческата програма</Text>
            </View>
            <VolunteerInfo />
            <PrimaryButton style={styles.buttonContainer} onPress={handleApplyNow}>Включи се сега</PrimaryButton>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        padding: 25
    },
    image: {
        width: "70%",
        height: 200,
        alignSelf: "center"
    },
    textContainer: {
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    subheading: {
        color: Colors.secondary,
        textAlign: "center",
        maxWidth: "75%"
    },
    buttonContainer: {
        marginTop: 30
    }
})