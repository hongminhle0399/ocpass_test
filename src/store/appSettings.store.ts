import { create } from "zustand";
import { persist } from "zustand/middleware";

const PERSIST_STORE_KEY = "APP_SETTINGS";

export const useAppSettingsStore = create(
  persist(
    () => ({
      isDarkMode: false,
    }),
    { name: PERSIST_STORE_KEY },
  ),
);

export const toggleDarkMode = () =>
  useAppSettingsStore.setState((state) => ({ isDarkMode: !state.isDarkMode }));
