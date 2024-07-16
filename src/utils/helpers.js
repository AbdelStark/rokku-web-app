export const formatAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatAmount = (amount, currency) => {
  return `${Number(amount).toLocaleString()} ${currency}`;
};
