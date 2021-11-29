import Page from "../../components/Page/Page";
import Search from "./Search/Search";
import NFTResults from "./NFTResults/NFTResults";
import classes from "./HomePage.module.scss";

const HomePage = ({ loading, nftList, hasMore, searchHandler, searchString, setPageNumber }) => {
  return (
    <Page>
      <h1 className={classes.title}>Explore NFTs</h1>
      <Search searchHandler={searchHandler} searchString={searchString} />
      <NFTResults loading={loading} nftList={nftList} hasMore={hasMore} setPageNumber={setPageNumber} />
    </Page>
  );
};

export default HomePage;
