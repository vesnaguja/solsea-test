// price
export const getPrice = (price) => {
  price = '' + price;
  const priceBeforeDecimalPoint = price.substring(0, price.length - 9);
  const priceAfterDecimalPoint = price.substring(price.length - 9, price.length);

  const finalNumberWithAllDecimals = parseFloat(priceBeforeDecimalPoint + '.' + priceAfterDecimalPoint);

  return (Math.round((finalNumberWithAllDecimals + Number.EPSILON) * 100) / 100).toFixed(2);
}

// creator address
export const getCreatorAddress = (ntfObject) => {
  if(ntfObject === undefined || ntfObject.Creators === undefined) return;
  return ntfObject.Creators[0].address;
};

export const shortCreatorAddress = (creatorAddress) => {
  if (creatorAddress === undefined) return;
  if (creatorAddress.length <= 8) return creatorAddress;

  const addressPartBeforeDots = creatorAddress.slice(0, 4);
  const addressPartAfterDots = creatorAddress.slice(creatorAddress.length - 4, creatorAddress.length);

  return addressPartBeforeDots + '...' + addressPartAfterDots;
}
