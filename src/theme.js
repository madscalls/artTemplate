// Theme levers carried over from the design mockup. Change these to re-skin the template.
export const THEME = {
  ink: '#1E1B24', // text and dark sections. Alternatives: '#232B4A', '#2B2B2B'
  pop: '#7DB46C', // saturated sage: main buttons and underlines. Alternatives: '#86BBBD', '#F6EFA6', '#9A48D0'
};

export function useTheme(pageDefaults) {
  return { ...pageDefaults, ...THEME };
}
