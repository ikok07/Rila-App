import PrimaryInput from "../ui/PrimaryInput";
import {StyleSheet, View} from "react-native";
import PrimaryButton from "../ui/PrimaryButton";
import {useCreateVolunteerMutation} from "../../store/slices/volunteerUser";
import {useEffect, useState} from "react";
import useAppVariables from "../../hooks/useAppVariables";
import {useDispatch} from "react-redux";
import {setMessage} from "../../store/slices/appVariables";

export function VolunteerApplyForm() {

    const [createVolunteer, {isLoading, isSuccess}] = useCreateVolunteerMutation()

    const {userToken} = useAppVariables()
    const dispatch = useDispatch()
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")

    function handleCreateVolunteer() {
        const body = {
            name: `${fName} ${lName}`,
            email,
            phone,
            city
        }

        createVolunteer(body)
    }

    useEffect(() => {
        if (isSuccess) dispatch(setMessage({shown: true, type: "success", text: "Успешна регистрация!"}))
    }, [isSuccess]);

    return <View style={styles.rootContainer}>
        <View style={styles.row}>
            <PrimaryInput label="Име" value={fName} setValue={setFName} />
            <PrimaryInput label="Фамилия" value={lName} setValue={setLName} />
        </View>
        <View style={styles.col}>
            <PrimaryInput label="Имейл" placeholder="youremail@email.com" value={email} setValue={setEmail} />
            <PrimaryInput label="Телефон" placeholder="+359..." value={phone} setValue={setPhone}/>
            <PrimaryInput label="Населено място" placeholder="София..." value={city} setValue={setCity}/>
        </View>

        <PrimaryButton style={styles.buttonContainer} onPress={handleCreateVolunteer} loading={isLoading}>Потвърждаване</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
      marginTop: 30
    },
    row: {
        flexDirection: "row",
        gap: 15,
        marginBottom: 15
    },
    col: {
        gap: 15,
    },
    buttonContainer: {
        marginTop: 25
    }
})
