export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    signDisplay: 'always',
    // style: 'percent',
    // maximumFractionDigits: 2,
  }).format(value);
};
