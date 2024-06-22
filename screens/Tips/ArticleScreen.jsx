import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useGetArticleByIdQuery} from "../../store/slices/articles";
import {FullscreenLoader} from "../../components/ui/FullscreenLoader";
import {Colors} from "../../config/constants";
import TipsArticleBullet from "../../components/Tips/TipsArticleBullet";

export default function ArticleScreen({route}) {
    const articleId = route.params.articleId
    const {data: article, isLoading, error} = useGetArticleByIdQuery(articleId)

    if (isLoading) return <FullscreenLoader />

    return <ScrollView>
        <View style={styles.rootContainer}>
            <Image source={{uri: article.image}} style={styles.image}/>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.normalText}>{article.content.text}</Text>
            <View style={styles.bulletsContainer}>
                {article.content.bullets.map((bullet, index) => {
                    return <TipsArticleBullet key={index} number={index + 1} main={bullet.heading} text={bullet.content} />
                })}
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
      paddingHorizontal: 15,
        paddingTop: 30
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 12
    },
    title: {
        fontSize: 22,
        maxWidth: "80%",
        fontWeight: "bold",
        marginTop: 25
    },
    normalText: {
        fontSize: 16,
        color: Colors.secondary,
        marginTop: 15
    },
    bulletsContainer: {
        gap: 15,
        marginTop: 15
    }
})