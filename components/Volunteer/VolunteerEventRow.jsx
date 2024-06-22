import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../config/constants";
import {FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import VolunteerEventRowData from "./VolunteerEventRowData";
import {useNavigation} from "@react-navigation/native";

export default function VolunteerEventRow({event}) {
    const navigation = useNavigation()

    function handlePress() {
        navigation.navigate("VolunteerEventDetails", {eventId: event.id})
    }

    return <Pressable onPress={handlePress} style={({pressed}) => [pressed && styles.pressed, styles.rootContainer]}>
        <Image source={{uri: event.image}} style={styles.rowImage}/>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <View style={styles.dataContainer}>
                <VolunteerEventRowData Icon={MaterialCommunityIcons} iconName="map-marker-distance" label={`${event.distance || 0} km`} />
                <VolunteerEventRowData
                    Icon={FontAwesome6}
                    iconName="location-crosshairs"
                    label={event.location}
                />
                <VolunteerEventRowData
                    Icon={FontAwesome5}
                    iconName="signal"
                    iconSize={12}
                    label={event.danger}
                />
            </View>
        </View>
        <Ionicons name="arrow-forward" size={20} color={Colors.tertiary} />

    </Pressable>
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
        marginTop: 15,
        paddingVertical: 7,
        paddingHorizontal: 5,
        borderRadius: 12
    },
    textContainer: {
        flex: 1,
        gap: 5
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    pressed: {
        backgroundColor: Colors.quaternary
    },
    dataContainer: {
        flexDirection: "row",
        gap: 10
    },
    rowImage: {
        width: 45,
        height: 45,
        borderRadius: 22
    }
})