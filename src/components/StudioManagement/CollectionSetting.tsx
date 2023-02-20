import { FunctionComponent } from "react";
import { Form } from "react-bootstrap";
import styles from "./CollectionSetting.module.css"

const CollectionSetting: FunctionComponent = () => {
    return (
        <div className={styles.maincomponent}>
            <Form>
                <Form.Label className={styles.sidemaintitle}>Collection Settings</Form.Label>
                <div className={styles.formcomp}>
                    <Form.Label className={styles.formlabel}>Collection Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label className={styles.helpbox} muted>
                        Pick something short and sweet. Imagine choosing a title for a photo album cover.
                    </Form.Label>
                </div>
                <div className={styles.formcomp}>
                    <Form.Label className={styles.formlabel}>Event Date</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </div>
                <div className={styles.formcomp}>
                    <Form.Label className={styles.formlabel}>Collection Url</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label className={styles.helpbox} muted>
                        Give your collection a unique url. Your client will be using this URL to access your Collection.
                    </Form.Label>
                </div>
                <div className={styles.formcomp}>
                    <Form.Label className={styles.formlabel}>Collection Status</Form.Label>
                    <Form.Control type="text" placeholder="" />
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
                    <Form.Control type="text" placeholder="" />
                    <Form.Label className={styles.helpbox} muted>
                        Snape gives your clients the ability to share your work everywhere.
                        Your work will be seen by as many as possible along with your brand.
                    </Form.Label>
                </div>
            </Form>
        </div>
    );
};

export default CollectionSetting;
