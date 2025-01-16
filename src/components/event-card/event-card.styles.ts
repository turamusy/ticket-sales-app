import { theme } from "@app/styles/color-variables";
import { StyleSheet } from "react-native";

/** Стили для компонента мероприятия */
export const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        borderRadius: 8,
    },
    titleText: {
        width: '90%',
        fontWeight: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginTop: 10,
        marginVertical: 5
    },
    secondaryText: {
        color: theme.sonicSilver,
    },
    priceText: {
        fontWeight: 'bold',
        textAlign: 'left',
    },
});