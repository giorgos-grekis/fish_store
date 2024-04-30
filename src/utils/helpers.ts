export const formatedPrice = (price: number): string => {
  //   return (price / 100).toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });

  return (price / 100).toFixed(2);
};
