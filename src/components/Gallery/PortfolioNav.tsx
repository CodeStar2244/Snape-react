import { useState } from 'react';
import { Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import CollectionService from '../../api/Collection/collection';
import { MESSAGE, STATUS_CODE, VALIDATIONS } from '../../Utils/constants';
import { NotificationWithIcon } from '../../Utils/helper';
import styles from "./GalleryNav.module.css";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CreatePortfolioModal from '../Modal/CreatePortfolioModal';
import PortfolioService from '../../api/Portfolio/portfolio';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '0ch',
            '&:focus': {
                width: '20ch',
                border: '1px solid #D9D9D9',
                borderRadius: '10px'
            },
        },
    },
}));
function PortfolioNav(props: any): any {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")

    function handleChange(value: any) {
        getCollectionList(value)
    }

    function handleSearch(event: any) {
        setSearch(event.target.value)
        const searchString = `?search=${event.target.value}`
        getCollectionList(searchString)
    }
    const createPortfolio = async ()=>{
        try {console.log("helllo")
        
        const res = await PortfolioService.createPortfolio()
                    if (res && res?.code === STATUS_CODE.SUCCESS) {
                        navigate(`/portfolio/${res.result.id}`)
                    }
            
        } catch (error) {
            console.log(error , "error")
        }
        
    }

    const getCollectionList = async (value: any) => {
        try {
            props.setLoaderSort(true)
            const res = await CollectionService.getCollectionSort(value)
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                props.setCollectionSort(res?.result)
                props.setLoaderSort(false)
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                props.setLoaderSort(false)
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                props.setLoaderSort(false)
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }

    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Navbar className={styles.maincomp} key="sm" expand="sm">
                <Container fluid>
                    {/* <div className={styles.innerDiv}> */}
                {/* <Navbar.Brand className={styles.mainname}>Collections</Navbar.Brand> */}
                <div className={styles.settingtab} id="sidebar-nav2">
                <Nav variant="tabs">
                <Nav.Link as={NavLink}  eventKey="image"  to = {`/gallery`} className={styles.settingbtn}>
                    Collections
                </Nav.Link>
                <Nav.Link as={NavLink}  eventKey="setting" to = {`/portfolio`} className={styles.settingbtn}>
                    Portfolio
                </Nav.Link>
                </Nav>
                </div>
                    <Navbar.Collapse id="basic-navbar-nav" className={styles.rightNavDiv}>
                        <Nav className={styles.innernav}>
                            {/* <div className={styles.rightNavDiv}> */}
                            <Nav.Link className={styles.resposcreenaddbtn}>
                                <Button className={styles.collectionbtn} onClick={() => setModalShow(true)} variant="custom">
                                    {props.setButtonText}
                                </Button>
                            </Nav.Link>
                            <Nav.Link className={styles.navlinksearch}>
                                <Search className={styles.searchmain}>
                                    <SearchIconWrapper>
                                        <i className="fa-regular fa-magnifying-glass"></i>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder=""
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={handleSearch}
                                        name="search"
                                        value={search}
                                    />
                                </Search>
                            </Nav.Link>
                            {/* //?sort=name&order=ASC */}
                            <Nav.Link className={styles.navlinksort}>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    className={styles.sortbtn}
                                    align="end"
                                    variant="custom"
                                    title={<i className="fa-regular fa-arrow-right-arrow-left"></i>}
                                >
                                    <Dropdown.Item className={styles.navmain}>Sort by</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className={styles.dropitem}
                                        onClick={() => handleChange("?sort=name&order=ASC")}>Name: A - Z</Dropdown.Item>
                                    <Dropdown.Item className={styles.dropitem}
                                        onClick={() => handleChange("?sort=name&order=DESC")}>Name: Z - A</Dropdown.Item>
                                    <Dropdown.Item className={styles.dropitem}
                                        onClick={() => handleChange("?sort=eventDate&order=DESC")}>Event Date: New - Old</Dropdown.Item>
                                    <Dropdown.Item className={styles.dropitem}
                                        onClick={() => handleChange("?sort=eventDate&order=ASC")}>Event Date: Old - New</Dropdown.Item>
                                    <Dropdown.Item className={styles.dropitem}
                                        onClick={() => handleChange("?sort=createdAt&order=DESC")}>Created: New - Old</Dropdown.Item>
                                    <Dropdown.Item className={styles.dropitem}
                                        onClick={() => handleChange("?sort=createdAt&order=ASC")}>Created: Old - New</Dropdown.Item>
                                </DropdownButton>
                            </Nav.Link>
                            {/* </div> */}
                        </Nav>
                    </Navbar.Collapse>
                    {/* </div> */}
                    <CreatePortfolioModal
                        show={modalShow}
                        handledeletefiles={createPortfolio as any}
                        modaltext={"Create Portfolio for your photographs"}
                        onHide={() => setModalShow(false)}
                    />
                </Container>
            </Navbar >
        </>
    );
}

export default PortfolioNav;