const colors = {
  primaryGreen: '#1ca086',
};

const themes = {
  dark: {
    primary: colors.primaryGreen,
    separatorColor: 'rgba(255,255,255,0.20)',
    textColor: 'white',
    backgroundColor: '#121212',
    headerBackgroundColor: 'rgba(255,255,255,0.05)',
    blockquoteColor: 'rgba(255,255,255,0.20)',
    icon: 'white',
  },
  light: {
    primary: '#1ca086',
    separatorColor: 'rgba(0,0,0,0.08)',
    textColor: 'black',
    backgroundColor: 'white',
    headerBackgroundColor: '#f6f6f6',
    blockquoteColor: 'rgba(0,0,0,0.80)',
    icon: '#121212',
  },
};

type TThemeVariables = {
  primary: string;
  separatorColor: string;
  textColor: string;
  backgroundColor: string;
  headerBackgroundColor: string;
  blockquoteColor: string;
  icon: string;
};

export default themes;

export const setCssVariables = (theme: TThemeVariables) => {
  for (const value in theme) {
    document.body.style.setProperty(
      `--${value}`,
      theme[value as keyof TThemeVariables]
    );
  }
};
