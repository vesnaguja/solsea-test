import { useState, useEffect, useCallback } from "react";
import { getMoreNFTs } from "../services/infiniteScrollService";

const useGetNfts = (pageNumber, searchString) => {
  const [loading, setLoading] = useState(true);
  const [nftList, setNftList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const getInfiniteNfts = useCallback(async () => {
    const res = await getMoreNFTs(pageNumber, searchString);

    setNftList((prevNfts) => {
      const newList = [...prevNfts];

      // add nft to the list only if it is not already in the list
      res.data.forEach((nft) => {
        if (!newList.find((o) => o._id === nft._id)) {
          newList.push(nft);
        }
      });

      //console.log(newList);
      return newList;
    });

    setHasMore(res.limit * pageNumber < res.total);
    setLoading(false);
  }, [pageNumber, searchString]);

  useEffect(() => {
    setNftList([]);
    setHasMore(false);
  }, [searchString]);

  useEffect(() => {
    setLoading(true);
    getInfiniteNfts();
  }, [getInfiniteNfts]);

  return { loading, nftList, hasMore };
};

export default useGetNfts;
