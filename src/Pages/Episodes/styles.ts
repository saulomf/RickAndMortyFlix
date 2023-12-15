import { StyleSheet } from "react-native";
import COLORS from "../../Shared/colors";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.darkerGray,
        alignItems: 'center',
        flex: 1,
    },

    searchFieldtext: {
        height: 40,
        width: 320,
        margin: 12,
        borderWidth: 1,
        borderColor: '#a6a6a6',
        padding: 10,
    },

    subtitleContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },

    subtitleText: {
        marginHorizontal: 10,
        marginTop: 8
    }
})