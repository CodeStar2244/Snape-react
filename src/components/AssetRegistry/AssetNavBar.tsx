import { useState } from "react";
import styles from "./AssetNavBar.module.css";
import $ from 'jquery';
import AddNewDeviceModal from "../Modal/AddNewDeviceModal";
import { Dropdown, DropdownButton } from "react-bootstrap";

interface Props {
  navTitle: string,
  setdevicelist?: any,
}
const AssetNavBar = ({ navTitle, setdevicelist }: Props) => {
  const displaySideBar = () => {
    $("#leftContainer").css({ left: '0%', display: "block" })

  }

  const handleChange = (value: any) => {
    setdevicelist(value)
  }

  const handleSearchValue = (event: any) => {
    setSearch(event.target.value)
    let value = `search=${event.target.value}`
    setdevicelist(value)
  }

  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className={styles.assetnavbar}>
      <div className={styles.openSidebar} onClick={displaySideBar}> <i className="fa-solid  fa-bars"></i></div>
      <div className={styles.dashboard}>{navTitle}</div>
      <div className={styles.frameParent}>
        <input
          className={styles.frameChild}
          type="text"
          placeholder="Search IMEI"
          value={search}
          onChange={handleSearchValue}
        />

        <DropdownButton
          id="dropdown-basic-button"
          className={styles.sortbtn}
          align="end"
          variant="custom"
          title={<i className="fa-sharp fa-solid fa-right-left"></i>}
        >
          <Dropdown.Item className={styles.navmain}>Sort by</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className={styles.dropitem}
            onClick={() => handleChange("sort=nickName&order=ASC&")}>Name: A - Z</Dropdown.Item>
          <Dropdown.Item className={styles.dropitem}
            onClick={() => handleChange("sort=nickName&order=DESC&")}>Name: Z - A</Dropdown.Item>
          <Dropdown.Item className={styles.dropitem}
            onClick={() => handleChange("sort=deviceID&order=DESC&")}>Device Id : A - Z</Dropdown.Item>
          <Dropdown.Item className={styles.dropitem}
            onClick={() => handleChange("sort=deviceID&order=ASC&")}>Device Id : Z - A</Dropdown.Item>
          <Dropdown.Item className={styles.dropitem}
            onClick={() => handleChange("sort=deviceAmount&order=DESC&")}>Device Amount : Low - High</Dropdown.Item>
          <Dropdown.Item className={styles.dropitem}
            onClick={() => handleChange("sort=deviceAmount&order=ASC&")}>Device Amount : High - Low</Dropdown.Item>
        </DropdownButton>
      </div>
      <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
        Add New Device
      </button>
      <AddNewDeviceModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        createnew={true}
      />

    </div>
  );
};

export default AssetNavBar;