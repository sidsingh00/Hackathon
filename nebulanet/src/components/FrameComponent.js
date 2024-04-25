import styles from "./FrameComponent.module.css";
import FrameComponent1 from "./FrameComponent1";


const FrameComponent = () => {
  return (
    <section className={styles.macbookAir1Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <FrameComponent1 cHECKIN="CHECK - IN" prop="28" />
                <div className={styles.frameItem} />
              </div>
            </div>
            <div className={styles.destinationsLabel}>
              <div className={styles.frameDiv}>
                <FrameComponent1
                  cHECKIN="CHECK - OUT"
                  prop="29"
                  propMinWidth="81px"
                  propGap="26px"
                  propPadding="var(--padding-8xl) 0px 0px"
                />
                <div className={styles.homeDestination}>
                  <div className={styles.homeDestinationChild} />
                </div>
                <div className={styles.searchField}>
                  <div className={styles.guestsParent}>
                    <div className={styles.guests}>GUESTS</div>
                    <div className={styles.promoCodeBox}>02</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.destinationsList}>
              <div className={styles.destinationsListInner}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.haveAPromo}>Have a promo code?</div>
                <button className={styles.destinationName}>
                  <b className={styles.checkAvailability}>CHECK AVAILABILITY</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <b className={styles.destinations}>DESTINATIONS</b>
        </div>
        <div className={styles.destinationItem}>
          <div className={styles.destinationDetails}>
            <div className={styles.categoryList}>
              <div className={styles.categoryListChild} />
              <h1 className={styles.mars}>MARS</h1>
              <div className={styles.destinationDescription}>01</div>
            </div>
            <div className={styles.destinationPrice}>
              <b className={styles.marsIsTheFourthPlanetFrom}>
                Mars is the fourth planet from the Sun, and the seventh largest.
                It's the only planet we know of inhabited entirely by robots
              </b>
              <div className={styles.destinationImage}>
                <b className={styles.from}>From</b>
                <div className={styles.parent}>
                  <b className={styles.b}>$13,999</b>
                  <div className={styles.reviewsAndWorkProcess}>
                    <b className={styles.moreInfo}>More Info</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
