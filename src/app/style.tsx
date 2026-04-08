import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
  },

  header: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 100, // espaço entre ícone e texto
    backgroundColor: "#49494a",
  },

  title: {
    fontSize: 24,
    color: "#e5e5e5",
    fontFamily: "GoogleSans-Bold",
  },

  content: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    alignItems: "center",
  },

  contents: {
    padding: 15,
  },

  titleContents: {
    fontSize: 18,
    color: "#e5e5e5",
    marginBottom: 10,
    fontFamily: "GoogleSans-Bold",
    textAlign: "center", // opcional
  },

  center: {
    alignItems: "center", // 🔥 centraliza horizontalmente
  },

  pickerContainer: {
    width: "70%", // 🔥 controla o tamanho (pode testar 60%, 50%)
    backgroundColor: "#3a3a3a",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#555",
    overflow: "hidden",
  },

  picker: {
    color: "#fff",
  },

  searchButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e5e5e5",
    borderRadius:10,
    marginTop: 18,
  },

  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "GoogleSans-Bold",
  }, 

  apiResponse: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#404040",
    width: 340,
    height: 390,
    borderRadius: 16,
    alignSelf: 'center'

   },

   textDescription: {
    color: "#fff",
    textAlign: 'center',
    marginInlineStart: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 12,
    backgroundColor: "#6d6d6d",
    borderRadius: 10,
     
  },
});
