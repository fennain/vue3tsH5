// state
export type Theme = "light" | "dark";
export type LanguageType = "koKR" | "enUS" | null;

export interface IApp {
  theme: Theme;
  language: LanguageType;
  tabbarIndex: number;
}
