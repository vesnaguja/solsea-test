import { useState } from "react";
import { Routes, Route } from "react-router";
// custom hooks
import useGetNfts from "./hooks/useGetNfts";
import useDebounce from "./hooks/useDebounce";
// components
import HomePage from "./pages/HomePage/HomePage";
import SingleNftPage from "./pages/SingleNftPage/SingleNftPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Page from "./components/Page/Page";

const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchString, setSearchString] = useState("");

  const debouncedSearchString = useDebounce(searchString, 500);
  const { loading, nftList, hasMore } = useGetNfts(pageNumber, debouncedSearchString);

  const searchHandler = (searchString) => {
    setSearchString(searchString);
    setPageNumber(0);
  };

  return (
    <div className="App">
      <Page>
        <Routes>
          <Route
            path="/solsea-test/"
            exact
            element={
              <HomePage
                loading={loading}
                nftList={nftList}
                hasMore={hasMore}
                searchString={searchString}
                searchHandler={searchHandler}
                setPageNumber={setPageNumber}
              />
            }
          />
          <Route path="/solsea-test/nft/:Mint" element={<SingleNftPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Page>
    </div>
  );
};

export default App;
