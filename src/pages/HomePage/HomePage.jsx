import Search from "./Search/Search";
import NFTResults from "./NFTResults/NFTResults";
import classes from "./HomePage.module.scss";
import { Fragment } from "react";

const HomePage = ({ loading, nftList, hasMore, searchHandler, searchString, setPageNumber }) => {
  return (
    <Fragment>
      <h1 className={classes.title}>Explore NFTs</h1>
      <Search searchHandler={searchHandler} searchString={searchString} />
      <NFTResults loading={loading} nftList={nftList} hasMore={hasMore} setPageNumber={setPageNumber} />
    </Fragment>
  );
};

export default HomePage;
