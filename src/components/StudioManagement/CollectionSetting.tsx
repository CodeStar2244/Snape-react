import { FunctionComponent, useState, useEffect } from "react";
import { Button, Collapse, Form, InputGroup } from "react-bootstrap";
import styles from "./CollectionSetting.module.css"
import { useParams } from "react-router-dom"
import CollectionService from "../../api/Collection/collection";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import moment from "moment";

const CollectionSetting: FunctionComponent = () => {

    const { collectionId } = useParams()

    let initialValue = {
        name: "",
        url: "",
        eventDate: "",
        status: "",
        socialSharing: false
    }

    const getCollectionList = async () => {
        try {
            if (collectionId) {
                const res = await CollectionService.getCollectionById(collectionId as string)
                if (res && res?.code === STATUS_CODE.SUCCESS) {
                    console.log(res.result?.socialSharing, '-----result---------');
                    setFirstValue({
                        name: res?.result?.name || "",
                        url: res?.result?.url || "",
                        eventDate: res?.result?.eventDate || "",
                        status: res?.result?.status || "",
                        socialSharing: res?.result?.socialSharing as boolean || false,
                    })

                    setFormData({
                        name: res?.result?.name || "",
                        url: res?.result?.url || "",
                        eventDate: res?.result?.eventDate || "",
                        status: res?.result?.status || "",
                        socialSharing: res?.result?.socialSharing as boolean || false,
                    })
                }
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
            } else {
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    useEffect(() => {
        getCollectionList();
    }, [])

    const [name, setName] = useState(false);
    const [url, setUrl] = useState(false);
    const [firstVaue, setFirstValue] = useState(initialValue);
    const [formdata, setFormData] = useState(initialValue)

    const handleChange = (event: any) => {
        setFormData({ ...formdata, [event.target.name]: event.target.value })
        if (event.target.name === "name") {
            if (!name && event.target.value !== firstVaue.name) {
                setName(true)
            } else if (name && event.target.value === firstVaue.name) {
                setName(false)
            }
        }
        if (event.target.name === "url") {
            if (!url && event.target.value !== firstVaue.url) {
                setUrl(true)
            } else if (name && event.target.value === firstVaue.name) {
                setUrl(false)
            }
        }
    }

    const handleCancel = (event: any) => {
        if (event.target.name === "name") {
            setFormData({ ...formdata, name: firstVaue.name })
            setName(false)
        }
        else if (event.target.name === "url") {
            setFormData({ ...formdata, url: firstVaue.url })
            setUrl(false)
        }
    }

    const updateData = async (values: any) => {
        try {
            if (collectionId) {
                const updateRes = await CollectionService.updateCollection(collectionId, values)
                if (updateRes && updateRes?.code === STATUS_CODE.SUCCESS) {
                    NotificationWithIcon("success", "Setting saved.")
                    return updateRes?.result?.name
                }
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
            } else {
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    const handleSave = async (event: any) => {
        if (event.target.name === "name") {
            const updateName = await updateData({ name: formdata.name })
            setFormData({ ...formdata, name: updateName })
            setName(false)
        }
        else if (event.target.name === "url") {
            const updateName = await updateData({ url: formdata.url })
            setFormData({ ...formdata, url: updateName })
            setUrl(false)
        }
        else if (event.target.name === "status") {
            console.log(event.target.value, '-------url-------');
        }
        else if (event.target.name === "eventDate") {
            console.log(event.target.value, '-------url-------');
        }
        else if (event.target.name === "socialSharing") {
            console.log(event.target.value, '-------url-------');
        }
    }

    return (
        <>
            <div className={styles.maincomponent}>
                <Form>
                    <Form.Label className={styles.sidemaintitle}>Collection Settings</Form.Label>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formdata.name}
                                onChange={handleChange}
                            />
                            {
                                name ?
                                    <>
                                        <Button variant="outline-danger" name="name" onClick={handleCancel}>Cancel</Button>
                                        <Button variant="danger" name="name" onClick={handleSave}>Save</Button>
                                    </> : <></>
                            }
                        </InputGroup>
                        <Form.Label className={styles.helpbox} muted>
                            Pick something short and sweet. Imagine choosing a title for a photo album cover.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Event Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder=""
                            onKeyDown={(e) => e.preventDefault()}
                            value={moment(formdata.eventDate).format('yyyy-MM-DD')}
                            name="eventDate"
                            onBlur={handleSave}
                        />
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Url</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                name="url"
                                value={formdata.url}
                                onChange={handleChange}
                            />
                            {
                                url ?
                                    <>
                                        <Button variant="outline-danger" name="url" onClick={handleCancel}>Cancel</Button>
                                        <Button variant="danger" name="url" onClick={handleSave}>Save</Button>
                                    </> : <></>
                            }
                        </InputGroup>
                        <Form.Label className={styles.helpbox} muted>
                            Give your collection a unique url. Your client will be using this URL to access your Collection.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel} >Collection Status</Form.Label>
                        {
                            formdata.status === "UNPUBLISH" ?
                                <Form.Select name="status" defaultValue="PUBLISHED" onChange={handleSave} disabled>
                                    <option value="PUBLISHED" >Publihsed</option>
                                    <option value="HIDDEN" >Hidden</option>
                                </Form.Select> :
                                <Form.Select name="status" defaultValue={formdata.status === "PUBLISHED" ? "PUBLISHED" : "HIDDEN"} onChange={handleSave}>
                                    <option value="PUBLISHED" >Publihsed</option>
                                    <option value="HIDDEN" >Hidden</option>
                                </Form.Select>
                        }
                        <Form.Label className={styles.helpbox} muted>
                            Collections with Preview status can only be seen by you. Publish your collection to make it publicly accessible.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Tags</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Label className={styles.helpbox} muted>
                            What kind of collection is this? Separate your tags with a comma. e.g. wedding, outdoor, summer.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Social Sharing Buttons</Form.Label>
                        <Form.Select name="socialSharing" onChange={handleSave} defaultValue={formdata.socialSharing === false ? "false" : "true"}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Form.Select>
                        <Form.Label className={styles.helpbox} muted>
                            Snape gives your clients the ability to share your work everywhere.
                            Your work will be seen by as many as possible along with your brand.
                        </Form.Label>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default CollectionSetting;
