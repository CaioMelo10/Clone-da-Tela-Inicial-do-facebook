import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 88,
    backgroundColor: "#F5F5F5",
  },

  textLogo: {
    fontSize: 40,
    color: "#0056FE",
  },

  containerInput: {
    gap: 8,
    marginTop: 37,
  },

  input: {
    fontSize: 14,
    width: 342,
    height: 44,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 10,
    color: "#8f8989",
    backgroundColor: "#F8F0F0",
  },

  buttonLogin: {
    width: 342,
    height: 47,
    backgroundColor: "#0339F9",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginTop: 28,
  },

  buttonTextLogin: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
  },

  buttonPassword: {
    alignItems: "center",
    marginTop: 21,
  },

  buttonTextPassword: {
    color: "#0266FB",
    fontWeight: 700,
    fontSize: 16,
  },

  lineOr: {
    marginTop: 41,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    width: 163,
    height: 1,
    backgroundColor: "#000000",
  },

  lineText: {
    fontSize: 16,
    margin: 11,
  },

  buttonAccount: {
    width: 238,
    height: 44,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#07A717",
  },

  buttonTextAccount: {
    fontSize: 18,
    color: "#fff",
  },

  containerFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 160,
    marginBottom: 17,
    gap: 22,
  },

  footerText: {
    fontSize: 16,
    color: "#000",
  },

  textCopyright: {
    fontSize: 16,
    color: "#666666",
  },
});
