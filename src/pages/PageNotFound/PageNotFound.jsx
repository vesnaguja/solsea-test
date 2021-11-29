import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import classes from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <Page>
      <h1 className={classes.title}>Error 404: Nothing was found on this page.</h1>
      <p>
        Go to <Link to="/solsea-test/">home page</Link> instead.
      </p>
    </Page>
  );
};

export default PageNotFound;
