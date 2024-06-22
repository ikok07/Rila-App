import {useSelector} from "react-redux";

export default function useAppVariables() {
    return useSelector(state => state.appVariablesReducer)
}