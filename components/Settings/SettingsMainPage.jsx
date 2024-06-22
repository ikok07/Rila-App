import {Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import {SettingsCard} from "./SettingsCard";
import SettingsRow from "./SettingsRow";
import {Colors} from "../../config/constants";
import {backendApi} from "../../store/backendApi";
import {useDispatch} from "react-redux";
import {useState} from "react";

export default function SettingsMainPage({navigation}) {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    return <ScrollView>
        <View style={styles.shadowContainer}>
            <View style={styles.rowsContainer}>
                <SettingsRow icon="document-lock-outline" label={"Privacy Policy"} onPress={() => console.log("Privacy Policy")}/>
                <SettingsRow icon="people-outline" label={"Contact Us"} onPress={() => console.log("Contact Us")}/>
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    shadowContainer: {
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: 10,
        marginTop: 30
    },
    rowsContainer: {
        marginHorizontal: 20,
        borderRadius: 12,
        overflow: "hidden",
        borderWidth: Platform.OS === "android" ? 1 : 0,
        borderColor: Colors.lightGray2,
        shadowColor: Colors.primary,
    }
})