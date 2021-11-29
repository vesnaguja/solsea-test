import { Fragment } from "react";
import Header from "../Header/Header";
import classes from "./Page.module.scss";

const Page = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className={classes.wrapper}>
        <main className={classes.main}>{children}</main>
      </div>
    </Fragment>
  );
};

export default Page;
