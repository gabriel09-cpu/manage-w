import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b2b2b"
    },

    header: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: "center",
        gap: 10, // espaço entre ícone e texto
        backgroundColor: "#49494a",
    },

    title: {
        fontSize: 24,
        color: "#e5e5e5",
        fontFamily: "GoogleSans-Bold"
    },

})