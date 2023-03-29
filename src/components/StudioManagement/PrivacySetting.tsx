import { FunctionComponent, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Constants from "../../Config/Constants";
import styles from "./PrivacySetting.module.css"

const PrivacySetting: FunctionComponent = () => {

    const [passwordBtn, setPasswordBtn] = useState(false);

    const handleCancel = (event: any) => {
        setPasswordBtn(false)
    }

    const handleSave = (event: any) => {

    }

    return (
        <>
            <div className={styles.maincomponent}>
                <Form>
                    <Form.Label className={styles.sidemaintitle}>Privacy</Form.Label>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Password</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder=""
                                aria-label="Password"
                                aria-describedby=""
                                name="password"
                            />
                            {
                                passwordBtn ?
                                    <>
                                        <Button variant="outline-danger" name="name" onClick={handleCancel}>Cancel</Button>
                                        <Button variant="danger" name="name" onClick={handleSave}>Save</Button>
                                    </> : <Button variant="outline-secondary" id="button-addon2">
                                        Generate
                                    </Button>
                            }

                        </InputGroup>
                        <Form.Label className={styles.helpbox} muted>
                            Leave blank to make this collection public. Setting a password will require all guests to use this password in order see this collection.
                        </Form.Label>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default PrivacySetting;
