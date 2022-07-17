export const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
