import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    // backgroundColor: "pink",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center", // horizontally align in center
    // backgroundColor: "blue",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: "#3777f0",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    top: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },

  text: {
    color: "grey",
  },
});

export default styles;
