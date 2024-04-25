import { Button } from "@mui/material";
import styles from "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.macbookAir1Inner}>
      <header className={styles.frameParent}>
        <div className={styles.nebullaNetWrapper}>
          <div className={styles.nebullaNet}>Nebulla Net</div>
        </div>
        <div className={styles.categoryList}>
          <div className={styles.categoryListChild} />
          <div className={styles.categoryList1}>
            <div className={styles.categoryListItem} />
            <div className={styles.exLunarLandingWrapper}>
              <div className={styles.exLunarLanding}>Ex: Lunar Landing</div>
            </div>
            <Button
              className={styles.categoryList2}
              startIcon={<img width="13px" height="13px" src="./public/vector.png"  alt="Error"/>}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "12",
                background: "#000",
                borderRadius: "0px 19px 19px 0px",
                "&:hover": { background: "#000" },
                width: 104,
              }}
            >
              Search
            </Button>
          </div>
          <nav className={styles.categoryListInner}>
            <nav className={styles.frameGroup}>
              <div className={styles.homeWrapper}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.destinationWrapper}>
                <div className={styles.destination}>Destination</div>
              </div>
              <div className={styles.tour}>Tour</div>
              <div className={styles.booking}>Booking</div>
            </nav>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent2;
