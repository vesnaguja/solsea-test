import { Fragment, useCallback, useRef } from "react";
import Loader from "../../../components/Loader/Loader";
import NFTCard from "../NFTCard/NFTCard";
import classes from "./NFTResults.module.scss";

const NFTResults = ({ loading, nftList, hasMore, setPageNumber }) => {
  const observer = useRef();

  const lastNftElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );

  return (
    <Fragment>
      <div className={classes.containerFluid}>
        <div className={classes.container}>
          {nftList.length !== 0 &&
            nftList.map((nft, index) => {
              if (nftList.length === index + 1) {
                return <NFTCard nft={nft} key={nft._id} ref={lastNftElementRef} />;
              } else {
                return <NFTCard nft={nft} key={nft._id} />;
              }
            })}
        </div>
      </div>
      {loading && <Loader />}
    </Fragment>
  );
};

export default NFTResults;
