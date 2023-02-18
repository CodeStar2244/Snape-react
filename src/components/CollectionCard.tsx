import { FunctionComponent } from "react";
import styles from "./CollectionCard.module.css";

type CollectionCardType = {
  collectionName?: string;
  type:string;
};

const CollectionCard: FunctionComponent<CollectionCardType> = ({
  collectionName,type,
}) => {
  return (
    <div className={styles.clientWrapper}>
      <div className={styles.client}>
        <label className={styles.collectionName} htmlFor={collectionName}>{collectionName}</label>
        <input className={styles.form} id={collectionName} name={collectionName} type={type} />
      </div>
    </div>
  );
};

export default CollectionCard;
