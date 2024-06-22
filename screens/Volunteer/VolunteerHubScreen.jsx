import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import {useGetVolunteerEventsQuery, useGetVolunteerQuery} from "../../store/slices/volunteerUser";
import {Colors} from "../../config/constants";
import VolunteerEventRow from "../../components/Volunteer/VolunteerEventRow";
import {FullscreenLoader} from "../../components/ui/FullscreenLoader";


export default function VolunteerHubScreen() {

    const {data: volunteerUser} = useGetVolunteerQuery()
    const {data: events, isLoading, error} = useGetVolunteerEventsQuery()

    if (isLoading) return <FullscreenLoader />

    return <ScrollView style={styles.scrollView}>
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Добре дошъл, {volunteerUser.name.split(" ")[0]}</Text>
                <Text style={styles.subheadingText}>Разгледай настоящите кампании, в които можеш да се включиш</Text>
            </View>
            <View style={styles.volunteerEventsContainer}>
                <Text style={styles.volunteerEventsHeader}>Доброволчески дейности около теб</Text>
                {events.map((event, index) => {
                    return <VolunteerEventRow key={index} event={event}/>
                } )}
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 20,
        paddingTop: 30
    },
    headerContainer: {
      gap: 5
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subheadingText: {
        maxWidth: "90%"
    },
    volunteerEventsContainer: {
        marginTop: 30,
    },
    volunteerEventsHeader: {
        fontSize: 16,
        fontWeight: "bold",
        borderBottomColor: Colors.lightGray1,
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    rowImage: {
        width: 45,
        height: 45,
        borderRadius: 22
    }
})