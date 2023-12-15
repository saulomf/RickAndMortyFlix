import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.gray,
        margin: 16,
    },

    image: {
        height: 150,
        width: 150,
        backgroundColor: COLORS.white
    },

    subtitleText: {
        fontWeight: 'bold',
        lineHeight: 18
    },

    regularText: {
        fontWeight: 'bold',
        lineHeight: 18
    },

    centerButton: {
        alignSelf: 'center',
        marginTop: -5,
        marginBottom: 5
    },

    list: {
        alignSelf: 'center',
        marginHorizontal: 16
    }

});