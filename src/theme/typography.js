import { Platform } from "react-native"

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ ios: "Montserrat", android: "Montserrat" }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: "Montserrat", android: "Montserrat" }),
}
