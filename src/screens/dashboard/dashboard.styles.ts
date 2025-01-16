import { theme } from "@app/styles/color-variables";
import { StyleSheet } from "react-native";

/** Стили для экрана мероприятий */
export const styles = StyleSheet.create({
    lazyImageContainer: {
        position: 'relative',
    },
    activityIndicator: {
        height: 150,
        justifyContent: 'center'
    },
    cardCover: {
        width: '100%',
    },
    card: {
        marginBottom: 10,
        borderRadius: 8,
    },
    titleText: {
        marginTop: 10,
        fontWeight: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginVertical: 5
    },
    secondaryText: {
        color: theme.sonicSilver,
    },
    priceText: {
        fontWeight: 'bold',
        textAlign: 'right',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListContent: {
        padding: 10,
    },
});