import {ScrollView, StyleSheet, Text, View} from "react-native";
import TipsSection from "../../components/Tips/TipsSection";
import {useGetAllSectionsQuery} from "../../store/slices/articles";
import {FullscreenLoader} from "../../components/ui/FullscreenLoader";

export default function TipsMainScreen() {

    const {data: sections, isLoading, error} = useGetAllSectionsQuery()

    if (isLoading) return <FullscreenLoader />

    return <ScrollView>
        <View style={styles.rootContainer}>
            {sections.map((section, index) => {
                return <TipsSection key={index} section={section} />
            })}
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        gap: 35
    }
})