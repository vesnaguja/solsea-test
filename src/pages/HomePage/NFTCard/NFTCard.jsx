import React from "react";
import { Link } from "react-router-dom";
import { getPrice } from "../../../shared/helper";
import { FaRegEye, FaCertificate } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import logo from "../../../assets/images/logo.png";
import placeholder from "../../../assets/images/ph.jpg";
import classes from "./NFTCard.module.scss";

const NFTCard = React.forwardRef(({ nft }, ref) => {
  const nftPrice = getPrice(nft.price);

  return (
    <div className={classes.wrapper} ref={ref}>
      {/* if nft is verified it has blue border */}
      <div className={nft.verified ? classes.card + " " + classes.verified : classes.card}>
        <h3 className={classes.title}>{nft.Title}</h3>
        <div className={classes.imgWrapper}>
          <Link to={`/solsea-test/nft/${nft.Mint}`}>
            <img src={nft.Preview_URL === "undefined" ? placeholder : nft.Preview_URL} alt={nft.Title} className={classes.nftImg} />
          </Link>
        </div>

        {/* price */}
        <p className={classes.price}>
          {nftPrice} <span>SOL</span>
        </p>

        {/* icons section */}
        <div>
          <div className={classes.row}>
            {nft.LicenseTitle ? (
              <div>
                <div>
                  <FaCertificate />
                </div>
                <p>{nft.LicenseTitle}</p>
              </div>
            ) : (
              <div></div>
            )}

            <div className={classes.eye}>
              <p>{nft.views}</p>
              <p>
                <FaRegEye className={classes.icon} />
              </p>
            </div>
          </div>

          <div className={classes.row}>
            <div>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <p>Minted on Solsea</p>
            </div>
            <div className={classes.heart}>
              <p>{nft.liked} </p>
              <p>
                <FiHeart className={classes.icon} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NFTCard;
