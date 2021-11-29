import classes from "./Header.module.scss";
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img src={logo} alt="logo" />
        <h2 className={classes.title}>solsea</h2>
      </div>
    </header>
  );
};

export default Header;
