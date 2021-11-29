import { MdSearch } from "react-icons/md";
import classes from "./Search.module.scss";

const Search = ({ searchHandler, searchString }) => {
  return (
    <div className={classes.wrapper}>
      <input
        type="search"
        placeholder="Search by NFT name"
        className={classes.input}
        value={searchString}
        onChange={(e) => searchHandler(e.target.value)}
      />
      <MdSearch className={classes.icon} />
    </div>
  );
};

export default Search;
