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
        borderColor: COLORS.gray,
        padding: 10,
    },

    headerField: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },

    headerText: {
        marginHorizontal: 10,
        marginTop: 8
    }
});