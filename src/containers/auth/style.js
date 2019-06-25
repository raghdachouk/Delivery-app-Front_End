import { StyleSheet } from "react-native";

import { metrics, fonts } from "../../themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: metrics.doubleBaseMargin,
    paddingHorizontal: metrics.baseMargin
  },
  subContainer: {
    flex: 2
  },
  footer: {
    flex: 1,
    justifyContent: "space-between"
  },
  label: {
    fontFamily: "proximaNovaBold",
    ...fonts.h3,
    marginBottom: metrics.doubleBaseMargin,
    paddingHorizontal: metrics.smallMargin
  }
});
