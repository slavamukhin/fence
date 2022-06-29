export enum EThemeName {
  DARK = 'dark',
  WHITE = 'white'
}

export type ThemeType = Record<string, string> & { name: EThemeName }