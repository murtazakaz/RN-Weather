import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE = {
    fontFamily: typography.primary,
    color: color.black,
    fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * customize these to whatever you need in your app.
 */
const presets = {
    /**
     * The default text styles.
     */
    default: BASE,

    /**
     * bold version of the default text.
     */
    bold: { ...BASE, fontWeight: "bold" },

    /**
     * Large headers.
     */
    header: { ...BASE, fontSize: 24, fontWeight: "bold" },

    /**
     * Field labels that appear on forms above the inputs.
     */
    fieldLabel: { ...BASE, fontSize: 13, color: color.dim },

    /**
     * A smaller piece of secondard information.
     */
    secondary: { ...BASE, fontSize: 9, color: color.dim },
}

/**
 * A list of preset names.
 */
export default presets;
