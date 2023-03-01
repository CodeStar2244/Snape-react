import styles from "./AssetActiveComp.module.css" 
interface Props {
    active:string
}

const AssetActiveComp = ({active}:Props) => {
  return (
    <div className={styles.activeDiv}>
        <div className={active === "For Sale" ? styles.ForSale: styles[`${active}`] }>{active}</div>
        <i className="fa-regular fa-ellipsis"></i>     


    </div>
  )
}

export default AssetActiveComp