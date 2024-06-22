import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../config/constants";

export default function TipsArticleBullet({number, main, text}) {
    return <View style={styles.rootContainer}>
        <Text style={styles.mainText}>#{number}: {main}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
      maxWidth: "95%"
    },
    mainText: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 2
    },
    text: {
        marginTop: 7,
        color: Colors.secondary
    }
})