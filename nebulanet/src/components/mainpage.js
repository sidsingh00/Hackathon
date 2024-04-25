import { Button } from "@mui/material";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import styles from "./mainpage.module.css";

const MacBookAir = () => {
  return (
    <div className={styles.macbookAir1}>
      <FrameComponent2 />
      <div className={styles.categoryListParent}>
        <div className={styles.categoryList}>
          <div className={styles.checkInPromoCode}>
            <h1 className={styles.yourGatewayTo}>
              Your Gateway to the Final Frontier
            </h1>
          </div>
          <h1 className={styles.yourGatewayTo1}>
            Your Gateway to the Final Frontier
          </h1>
        </div>
        <div className={styles.categoryListWrapper}>
          <Button
            className={styles.categoryList1}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "17",
              borderColor: "#d41575",
              borderRadius: "55px",
              "&:hover": { borderColor: "#d41575" },
            }}
          >
            Explore
          </Button>
        </div>
      </div>
      <section className={styles.image4Parent}>
        <img className={styles.image4Icon} alt="" src="../public/image4.png" />
        <img
          className={styles.image5Icon}
          loading="lazy"
          alt=""
          src="../public/image5.png"
        />
        <img
          className={styles.image7Icon}
          loading="lazy"
          alt=""
          src="/image-7@2x.png"
        />
        <div className={styles.haveAPromoCodeLabel} />
        <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <img
          className={styles.image9Icon}
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
        <img
          className={styles.image15Icon}
          loading="lazy"
          alt=""
          src="/image-15@2x.png"
        />
        <img
          className={styles.image11Icon}
          loading="lazy"
          alt=""
          src="/image-11@2x.png"
        />
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-12.svg"
        />
        <img
          className={styles.arrowIcon}
          loading="lazy"
          alt=""
          src="/arrow-2.svg"
        />
      </section>
      <FrameComponent />
    </div>
  );
};

export default MacBookAir;
