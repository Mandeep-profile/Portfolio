import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved !== null) {
      return saved === "light";
    }
  } catch (e) {}
  return true;
};

const setSavedTheme = (theme) => {
  try {
    localStorage.setItem("portfolio_theme", theme);
  } catch (e) {}
};

const IntialThemeState = {
  isThemeSelected: getInitialTheme(),
};

const ThemeMode = createSlice({
  name: "theme",
  initialState: IntialThemeState,
  reducers: {
    isLightTheme(state) {
      state.isThemeSelected = true;
      setSavedTheme("light");
    },
    isDarkTheme(state) {
      state.isThemeSelected = false;
      setSavedTheme("dark");
    },
  },
});

const initialToggleExperience = {
  isExperienced: true,
};

const ToggleExperience = createSlice({
  name: "experience",
  initialState: initialToggleExperience,
  reducers: {
    isExperiencedOpen(state) {
      state.isExperienced = true;
    },
    isExperiencedClose(state) {
      state.isExperienced = false;
    },
  },
});

const store = configureStore({
  reducer: {
    selectedTheme: ThemeMode.reducer,
    Experience: ToggleExperience.reducer,
  },
});

export const ThemeActions = ThemeMode.actions;
export const ToggleActions = ToggleExperience.actions;

export default store;
