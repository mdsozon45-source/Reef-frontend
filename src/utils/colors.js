
export const getColor = (availableColor = 'primary') => {
  if (typeof window === 'undefined') {
    return null;
  }

  const color = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${availableColor}`);

  return color;
};

export const getThemeColors = () => [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];
