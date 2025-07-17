export const getPasswordError = (value: string): string | null => {
  if (value.length === 0) return null;
  const hasLetter = /[a-zA-Z]/.test(value);
  const isLongEnough = value.length >= 6;
  
  if (!isLongEnough && !hasLetter) {
    return "Password must be at least 6 characters and contain a letter.";
  }
  if (!isLongEnough) {
    return "Password must be at least 6 characters.";
  }
  if (!hasLetter) {
    return "Password must contain a letter.";
  }
  return null;
};