import { SINGLE_NFT_API } from '../config/config';

export const getSingleNFT = async(Mint) => {
  const request = await fetch (`${SINGLE_NFT_API}${Mint}`);
  const response = await request.json();
  return response;
}
