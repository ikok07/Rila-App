import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getFromAsyncStorage(key) {
    return await AsyncStorage.getItem(key)
}