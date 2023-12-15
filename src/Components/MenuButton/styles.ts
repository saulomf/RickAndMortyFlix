import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        margin: 20,
    },

    image: {
        height: 150,
        width: 150,
        backgroundColor: COLORS.white,
        tintColor: COLORS.darkGray,
    },

    regulartext: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }
});