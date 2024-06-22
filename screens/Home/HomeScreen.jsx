import {Platform, Text, View} from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {backendApi} from "../../store/backendApi";
import {setMessage} from "../../store/slices/appVariables";
import useAppVariables from "../../hooks/useAppVariables";

export default function HomeScreen() {
    const {userToken} = useAppVariables()
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    return <View>
        <Text>{userToken}</Text>
    </View>
}