import { scale } from "../helpers/functions";
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

export default {
  height: window.height,
  width: window.width,
  xsmallMargin: scale(5),
  smallMargin: scale(10),
  mediumMargin: scale(15),
  baseMargin: scale(20),
  doubleMediumMargin: scale(30),
  doubleBaseMargin: scale(40),
  bigMargin: scale(50),
  largeMrgin: scale(100)
};
