import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TipsMainScreen from "../../screens/Tips/TipsMainScreen";
import {Colors} from "../../config/constants";
import ArticleScreen from "../../screens/Tips/ArticleScreen";

const Stack = createNativeStackNavigator()

export default function TipsNavigation() {
    return <Stack.Navigator
        screenOptions={{
            contentStyle: {backgroundColor: Colors.bg}
        }}
    >
        <Stack.Screen name="TipsMain" component={TipsMainScreen} options={{
            title: "Съвети"
        }} />
        <Stack.Screen name="TipsArticle" component={ArticleScreen} options={{
            title: "Съвети"
        }} />
    </Stack.Navigator>
}