import {Image, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../config/constants";
import TipsArticleRow from "./TipsArticleRow";

export default function TipsSection({section}) {
    return <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
            <Image source={{uri: section.image}} style={styles.image}/>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
        </View>
        <View style={styles.articleList}>
            {section.articles.map((article, index) => {
                return <TipsArticleRow key={index} article={article} />
            })}
        </View>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.bg,
        borderRadius: 7,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: 10,
        elevation: 15,
        paddingBottom: 15
    },
    imageContainer: {
        position: "relative",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    sectionTitleContainer: {
        position: "absolute",
        bottom: 0,
        marginBottom: 7,
        marginLeft: 7,
        paddingVertical: 7,
        paddingHorizontal: 5,
        backgroundColor: Colors.primaryLowOpacity,
        borderRadius: 5,
    },
    sectionTitle: {
        color: Colors.textLight,
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    articleList: {
        paddingHorizontal: 15,
    }
})