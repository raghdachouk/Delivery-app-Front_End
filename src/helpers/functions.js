import { Dimensions } from "react-native";

const baselineHeight = 666;
const baselineWidth = 375;

// Grab the window object from that native screen size.
const window = Dimensions.get("window");

// The vertical resolution of the screen.
const screenHeight = window.height;

// The horizontal resolution of the screen.
const screenWidth = window.width;

const scaleSize =
  (screenHeight + screenWidth) / 2 / ((baselineHeight + baselineWidth) / 2);
// Scales the item based on the screen height and baselineHeight

export const scale = value => Math.floor(scaleSize * value);
