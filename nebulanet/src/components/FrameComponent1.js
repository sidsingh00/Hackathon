import { useMemo } from "react";
import styles from "./FrameComponent1.css";

const FrameComponent1 = ({
  cHECKIN,
  prop,
  propMinWidth,
  propGap,
  propPadding,
}) => {
  const cHECKINStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const juneLabelStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.checkInParent}>
        <div className={styles.checkIn} style={cHECKINStyle}>
          {cHECKIN}
        </div>
        <div className={styles.frameParent} style={frameDivStyle}>
          <div className={styles.promoCodeInputParent}>
            <div className={styles.promoCodeInput}>{prop}</div>
            <div className={styles.juneLabel} style={juneLabelStyle}>
              <div className={styles.june}>/June</div>
            </div>
          </div>
          <div className={styles.checkIn1}>
            <img
              className={styles.guestsLabelIcon}
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
