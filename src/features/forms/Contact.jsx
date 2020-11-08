import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import Form from "react-bootstrap/Form";
import { Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import ReplayIcon from "@material-ui/icons/Replay";
import Recaptcha from "react-recaptcha";
import {
  hideContact,
  setContactUserName,
  setContactEmail,
  setContactPhone,
} from "./contactSlice";
import styles from "./Contact.module.css";
export default function Contact() {
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA;
  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [approved, setApproved] = useState(false);
  let dispatch = useDispatch();

  const handleReset = () => {
    setEmail("");
    setPhone("");
    setName("");
    setMessage("");
  };
  const handleSubmit = () => {
    console.log("submit/redirect to somewhere");
    dispatch(setContactEmail(email));
    dispatch(setContactPhone(phone));
    dispatch(setContactUserName(name));
  };

  useEffect(() => {
    if (isEmail(email) && isMobilePhone(phone)) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }, [email, phone]);
  return (
    <Grid container direction="column">
      &nbsp;
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatch(hideContact());
              }}
            >
              <CloseIcon />
              &nbsp;Close
            </Button>
            &nbsp;
          </Grid>
        </Grid>
      </Grid>
      &nbsp;
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder={"Name"}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              {isEmail(email) ? (
                <Form.Control
                  type="email"
                  placeholder={"Email contact"}
                  className={`${styles.input}`}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              ) : (
                <Form.Control
                  type="email"
                  placeholder={"Email"}
                  value={email}
                  className={`${styles.warning} ${styles.input}`}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              )}
            </Form.Group>
            <Form.Group controlId="formPhone">
              {isMobilePhone(phone) ? (
                <Form.Control
                  type="text"
                  placeholder={"Phone contact"}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className={styles.input}
                />
              ) : (
                <Form.Control
                  type="text"
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className={`${styles.warning}`}
                />
              )}
            </Form.Group>
            <Form.Group controlId="formTextArea">
              <Form.Control
                as="textarea"
                rows="5"
                placeholder={"Message"}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </Form.Group>
            <Form.Group controlId="recaptchaVerification">
              <Recaptcha sitekey={recaptchaKey} />
            </Form.Group>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  {approved ? (
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      color="primary"
                    >
                      <SendIcon />
                      &nbsp;Send
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      color="primary"
                      disabled
                    >
                      <SendIcon />
                      &nbsp;Send
                    </Button>
                  )}
                  &nbsp;
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleReset}
                    variant="contained"
                    color="secondary"
                  >
                    <ReplayIcon />
                    &nbsp;Reset
                  </Button>
                  &nbsp;
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </Grid>
  );
}
