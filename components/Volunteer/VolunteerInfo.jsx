import {StyleSheet, Text, View} from "react-native";
import {VolunteerInfoRow} from "./VolunteerInfoRow";
import {Ionicons, FontAwesome5, FontAwesome, FontAwesome6} from "@expo/vector-icons";

export default function VolunteerInfo() {

    const infoRows = [
        {
            icon: FontAwesome5,
            iconName: "hand-holding-heart",
            heading: "Подай ръка",
            subheading: "Помагай на пожарникари и медици при гасене на пожари, евакуиране на хората, оказване на първа помощ и спасяване на животи - бъди герой."
        },
        {
            icon: FontAwesome,
            iconName: "wpforms",
            heading: "Гъвкави графици",
            subheading: "Можеш да отделяш само 2 часа седмично, за да не влияе на професионалния ти живот."
        },
        {
            icon: FontAwesome6,
            iconName: "people-group",
            heading: "Включи се в общности.",
            subheading: "Ще се запознаеш с много интересни хора, които имат сходни интереси като твоите."
        },
        {
            icon: FontAwesome5,
            iconName: "money-check-alt",
            heading: "Възнаграждение",
            subheading: "Ще получаваш възнаграждения и данъчни облекчения, спрямо мястото, на което живееш.",
            size: 24
        },
        {
            icon: FontAwesome5,
            iconName: "smile",
            heading: "Какво ти трябва",
            subheading: "Единственото, което ти трябва е желание."
        },
    ]

    return <View style={styles.rootContainer}>
        <Text style={styles.heading}>Какво представлява?</Text>
        {infoRows.map((row, index) => {
            return <VolunteerInfoRow
                key={index}
                Icon={row.icon}
                name={row.iconName}
                size={row.size}
                heading={row.heading}
                subheading={row.subheading}
            />
        })}

    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        marginTop: 25,
        gap: 20
    },
    heading: {
        fontSize: 19,
        fontWeight: "bold",
    }
})