import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./PhotographyCard.module.css";

type PhotographyCardType = {
  serviceType?: string;
  serviceOption?: string;
  serviceImageUrl?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propColor2?: Property.Color;
  propWidth?: Property.Width;
  propBackgroundColor1?: Property.BackgroundColor;
  propTop?: Property.Top;
  propHeight?: Property.Height;
};

const PhotographyCard: FunctionComponent<PhotographyCardType> = ({
  serviceType,
  serviceOption,
  serviceImageUrl,
  propBackgroundColor,
  propColor,
  propColor1,
  propColor2,
  propWidth,
  propBackgroundColor1,
  propTop,
  propHeight,
}) => {
  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const photographyStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const last7DaysStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
      width: propWidth,
    };
  }, [propColor2, propWidth]);

  const rectangleDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const appPhotographyCameraCamPhoIconStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  return (
    <div className={styles.photography}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} style={rectangleDivStyle} />
        <div className={styles.photographyParent}>
          <div className={styles.photography1} style={photographyStyle}>
            {serviceType}
          </div>
          <div className={styles.last7Days} style={last7DaysStyle}>
            Last 7 days
          </div>
          <div className={styles.div} style={divStyle}>
            {serviceOption}
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} style={rectangleDiv1Style} />
          <img
            className={styles.appPhotographyCameraCamPhoIcon}
            alt=""
            src={serviceImageUrl}
            style={appPhotographyCameraCamPhoIconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotographyCard;
