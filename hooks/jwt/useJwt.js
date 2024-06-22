import {sign} from "react-native-pure-jwt";
import uuid from "react-native-uuid"
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useJwt() {
    const [token, setToken] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        async function getToken() {
            try {
                setIsLoading(true)
                const localToken = await AsyncStorage.getItem("userToken")
                if (localToken) {
                    setToken(localToken)
                    setIsLoading(false)
                    return
                }
                const signedToken = await sign(
                    {
                        iss: process.env.EXPO_PUBLIC_JWT_ISSUER,
                        aud: process.env.EXPO_PUBLIC_JWT_AUDIENCE,
                        exp: new Date().getTime() + 1000 * 60 * 60 * 24 * 30,
                        sub: uuid.v4()
                    },
                    process.env.EXPO_PUBLIC_JWT_SECRET,
                    {
                        alg: "HS256"
                    }
                )
                await AsyncStorage.setItem("userToken", signedToken)
                setToken(signedToken)
            } catch(err) {
                setError(err)
            }
        }

        getToken()
    }, []);

    return {token, isLoading, error}
}