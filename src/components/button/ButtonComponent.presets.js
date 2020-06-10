import { color, spacing } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT = {
  paddingHorizontal: spacing[3],
}


export const viewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.palette.orange },

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  },
}

export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 9, color: color.palette.white },
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
}

