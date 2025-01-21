export const TRANSLATION_KEYS = {
  HOME: {
    TITLE: "HOME.TITLE",
    NEW_TODO: "HOME.NEW_TODO",
    NEW_TODO_BUTTON: "HOME.NEW_TODO",
    ADD_TODO_HELPER: "HOME.ADD_TODO_HELPER",
  },
} as const;

export type TranslationKeys = keyof typeof TRANSLATION_KEYS;
