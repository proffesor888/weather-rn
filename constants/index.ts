/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
export const PRESELECTED_HOURS_AMOUNT = 5;
export const BASE_URL = "http://api.weatherapi.com/v1/forecast";
export const FORMAT = "json";
export const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
export const DAYS = 2;
export const MAIN_LIGHT_COLOR = "#ccc8c8";
export const ERROR_COLOR = "#ff0000";
export const HIGHLIGHT_COLOR = "#c32f0f";
export const SECONDARY_HIGHLIGHT_COLOR = "#1bb835";
export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
