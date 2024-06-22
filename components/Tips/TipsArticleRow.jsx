import {Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../config/constants";
import {useNavigation} from "@react-navigation/native";

export default function TipsArticleRow({article}) {
    const navigation = useNavigation()

    function handlePress() {
        navigation.navigate("TipsArticle", {articleId: article.id})
    }

    return <Pressable onPress={handlePress} style={({pressed}) => [pressed && styles.pressed, styles.rootContainer]}>
        <Text style={styles.text}>{article.title}</Text>
        <Ionicons name="arrow-forward" size={20} color={Colors.tertiary} />
    </Pressable>
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.tertiary
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.7
    }
})