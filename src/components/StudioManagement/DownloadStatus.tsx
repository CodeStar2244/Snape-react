import { FunctionComponent } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "./DownloadStatus.module.css"

const DownloadStatus: FunctionComponent = () => {
    return (
        <div className={styles.maincomponent}>
            <Form>
                <Form.Label className={styles.sidemaintitle}>Download Status</Form.Label>
                <div className={styles.formcomp}>
                    <Form.Label className={styles.formlabel}>Gallery Download</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label className={styles.helpbox} muted>
                        Turn on to allow your clients to download from this Colection.
                    </Form.Label>
                </div>
                <div className={styles.formcomp}>
                    <Form.Label className={styles.formlabel}>Download Pin</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder=""
                            aria-label="Password"
                            aria-describedby=""
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Generate
                        </Button>
                    </InputGroup>
                </div>

            </Form>
        </div>
    );
};

export default DownloadStatus;
