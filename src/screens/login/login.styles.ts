import { theme } from "@app/styles/color-variables";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: theme.white,
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 10,
    },
    loading: {
        opacity: 0.5,
    }
});