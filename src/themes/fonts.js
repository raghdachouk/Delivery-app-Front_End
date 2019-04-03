import { scale } from "../helpers/functions";
import colors from "./colors";

const getStyle = fontSize => ({
  fontSize: scale(fontSize),
  color: colors.text,
  textAlign: "left"
});

export default {
  h1: getStyle(22),
  h2: getStyle(21),
  h3: getStyle(20),
  h4: getStyle(19),
  h5: getStyle(18),
  h6: getStyle(17),
  large: getStyle(17),
  medium: getStyle(16),
  small: getStyle(14),
  xSmall: getStyle(12)
};
