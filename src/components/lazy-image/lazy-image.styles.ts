import { theme } from "@app/styles/color-variables";
import { StyleSheet } from "react-native";

/** Стили для изображения мероприятия */
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
});