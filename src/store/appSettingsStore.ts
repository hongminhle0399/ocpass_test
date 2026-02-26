import { create } from "zustand";
import { persist } from "zustand/middleware";

export const PERSIST_KEY = "APP_SETTINGS";

interface AppSettingsState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useAppSettingsStore = create<AppSettingsState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () =>
        set((state: AppSettingsState) => ({ isDarkMode: !state.isDarkMode })),
    }),
    { name: PERSIST_KEY },
  ),
);
