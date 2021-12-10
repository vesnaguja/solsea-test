// react
import { useEffect, useState } from "react";
// react router
import { useParams } from "react-router";
// react router dom
import { useNavigate } from "react-router-dom";
// icons
import { FaCertificate, FaRegEye } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { VscWarning } from "react-icons/vsc";
// services
import { getSingleNFT } from "../../services/singleNftService";
// helper functions
import { shortCreatorAddress, getCreatorAddress } from "../../shared/helper";
import { getPrice } from "../../shared/helper";
// components
import Page from "../../components/Page/Page";
import Loader from "../../components/Loader/Loader";
// images
import logo from "../../assets/images/logo.png";
import placeholder from "../../assets/images/ph.jpg";
// css
import classes from "./SingleNftPage.module.scss";

const SingleNftPage = () => {
  let navigate = useNavigate();
  let { Mint } = useParams("Mint");
  const [singleNft, setSingleNft] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getSingleNftAndSetState = async () => {
      const NftData = await getSingleNFT(Mint);

      // redirection to home page if NFT doesn't exist
      if (NftData._id === undefined) {
        navigate("/solsea-test/");
      }

      setLoading(false);
      setSingleNft(NftData);
    };
    getSingleNftAndSetState();
  }, [Mint, navigate]);

  // creator address
  const creatorAddress = getCreatorAddress(singleNft);
  const creatorAddressShorted = shortCreatorAddress(creatorAddress) || "No creator address.";

  const nftPrice = getPrice(singleNft.price);

  return (
    <Page>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.containerFluid}>
          <div className={classes.split}>
            {/* COLUMN 1 */}
            <div className={classes.column}>
              {/* SECTION 1 */}
              <div className={classes.section1}>
                {/* if image is undefined, placeholder image will be display */}
                <img src={singleNft.Preview_URL === "undefined" ? placeholder : singleNft.Preview_URL} alt="single NFT" />
              </div>

              {/* SECTION 2 */}
              <section className={classes.section2}>
                <p>{singleNft.Description}</p>
              </section>
            </div>

            {/* COLUMN 2 */}
            <div className={classes.column}>
              {/* SECTON 3 */}
              <section className={classes.section3}>
                {/* icons */}
                <div className={classes.icons}>
                  <div className={classes.eye}>
                    <p>
                      <FaRegEye />
                    </p>
                    <p>{singleNft.views}</p>
                  </div>
                  <div className={classes.heart}>
                    <p>
                      <FiHeart />
                    </p>
                    <p>{singleNft.liked}</p>
                  </div>
                </div>

                {/* creator */}
                <h3>Creator</h3>
                <p className={classes.creatorText}>{creatorAddressShorted}</p>

                {/* title */}
                <h2>{singleNft.Title}</h2>

                {/* licence */}
                <div className={classes.license}>
                  <p>
                    <FaCertificate />
                  </p>
                  <p>
                    <span className={classes.licenseLabel}> License: </span>
                    {singleNft.LicenseTitle ? singleNft.LicenseTitle : "None attached"}
                  </p>
                </div>

                {/* minted */}
                <div className={classes.minted}>
                  <div>
                    <img src={logo} alt="logo" />
                  </div>

                  <p>Minted on Solsea</p>
                </div>

                {/* tags */}
                <div className={singleNft.tags === undefined ? classes.tagsWrapper : classes.tagsWrapper + " " + classes.border }>
                  {singleNft.tags === undefined
                    ? ""
                    : singleNft.tags.map((tag, index) => (
                        <p className={classes.tag} key={index}>
                          {tag}
                        </p>
                      ))}
                </div>

                {/* collection */}
                <h3 className={classes.collection}>
                  {singleNft.nft_collection === undefined || singleNft.nft_collection.title === undefined
                    ? "Not Part of a Collection"
                    : singleNft.nft_collection.title}
                </h3>

                <div>
                  {singleNft.verified === null ? (
                    <div className={classes.unverified}>
                      <p>
                        <VscWarning />
                      </p>
                      <p>Unverified NFT - please check everything before you buy</p>
                    </div>
                  ) : (
                    singleNft.verified
                  )}
                </div>
              </section>

              {/* SECTION 4*/}
              <section className={classes.section4}>
                <p className={classes.listed}>
                  <strong>Listed by:</strong> <span className={classes.sellerKey}>{singleNft.sellerKey}</span>
                </p>
                <p className={classes.price}>
                  {nftPrice} <span>SOL</span>
                </p>
                <button>Connect Your Wallet</button>
                <p className={classes.link}>How to spot fakes?</p>
              </section>

              {/* SECTION 5 */}
              <section className={classes.section5}>
                <h3>History</h3>
                <p>No history of sales on Solsea!</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export default SingleNftPage;
