import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import VolunteerEventRowData from "./VolunteerEventRowData";
import {FontAwesome5, FontAwesome6, MaterialCommunityIcons} from "@expo/vector-icons";
import PrimaryButton from "../ui/PrimaryButton";
import {FullscreenLoader} from "../ui/FullscreenLoader";
import {useGetVolunteerEventsQuery} from "../../store/slices/volunteerUser";
import MapView from "react-native-maps";
import {useGetLocationDataQuery} from "../../store/geocodingApi";
import Animated, {FadeIn, FadeOut} from "react-native-reanimated";

export default function VolunteerEventDetailsScreen({route}) {
    const {data: events, isLoading} = useGetVolunteerEventsQuery()
    const event = events.filter(event => event.id === route.params.eventId)[0]

    const {data: locationData, isLoading: isGettingLocationData, error} = useGetLocationDataQuery(event.location)

    if (isLoading) return <FullscreenLoader />

    return <ScrollView style={styles.rootContainer}>
        <Image source={{uri: event.image}} style={styles.image}/>
        <View style={styles.headingContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <View style={styles.dataContainer}>
                <VolunteerEventRowData
                    Icon={MaterialCommunityIcons}
                    iconName="map-marker-distance"
                    label={`${event.distance || 0} km`}
                    labelSize={14}
                />
                <VolunteerEventRowData
                    Icon={FontAwesome6}
                    iconName="location-crosshairs"
                    label={event.location}
                    labelSize={14}
                />
                <VolunteerEventRowData
                    Icon={FontAwesome5}
                    iconName="signal"
                    label={event.danger}
                    labelSize={14}
                />
            </View>
        </View>
        <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Информация</Text>
            <Text>{event.description || "Няма информация"}</Text>
        </View>
        {isGettingLocationData ?
            <Animated.View entering={FadeIn.duration(150)} exiting={FadeOut.duration(150)}>
                <ActivityIndicator size="small" style={styles.loader}/>
            </Animated.View>
            :
            <Animated.View entering={FadeIn.duration(150)} exiting={FadeOut.duration(150)}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: locationData[0].lat,
                        longitude: locationData[0].lon,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.09
                    }}
                />
            </Animated.View>
        }
        <PrimaryButton style={styles.button}>Присъединяване</PrimaryButton>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 7,
    },
    headingContainer: {
        marginVertical: 20,
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    dataContainer: {
        flexDirection: "row",
        gap: 10,
    },
    infoSection: {
      gap: 10
    },
    sectionTitle: {
        fontSize: 18
    },
    loader: {
      height: 200
    },
    map: {
        width: "100%",
        height: 200,
        borderRadius: 12,
        marginTop: 30
    },
    button: {
        marginVertical: 25
    }
})