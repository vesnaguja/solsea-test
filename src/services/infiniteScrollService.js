import {
  NFTS_API,
  ITEMS_PER_PAGE
} from '../config/config';

export const getMoreNFTs = async (page, searchString = '') => {

  const searchParameter = searchString !== '' ? `&Title=${searchString}` : '';

  const request = await fetch(`${NFTS_API}?$limit=${ITEMS_PER_PAGE}&$skip=${ITEMS_PER_PAGE * page}${searchParameter}`);
  const response = await request.json();
  return response;
}