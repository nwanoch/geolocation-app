import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonRedirect,
} from "@ionic/react";
import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import bottomDivImg from "../../../images/authimage.png";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input, Button } from "@chakra-ui/react";
import { dispatch } from "react-hot-toast/dist/core/store";
import { login } from "../../../redux/action/action";
function BottomDiv() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const usernameRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const username = usernameRef.current?.value;
  const password = passwordRef.current?.value;
  const [showLoading, setShowLoading] = useState(false);

  function validateField(value: any) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bottomDivImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
        borderRadius: "40px 40px 0 0",
        bottom: "0",
        height: "62vh",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "left", width: "85%", margin: "auto" }}>
        <h1
          style={{
            color: "#fff",
            fontSize: "40px",
            fontFamily: "'Helvetica Neue', sans-serif",
            fontWeight: "bold",
            paddingLeft: "12px",
            margin: "30px auto 5px",
          }}
        >
          Log <br />
          In
        </h1>
        <Formik initialValues={{}} onSubmit={(values, actions) => {}}>
          {(props) => (
            <Form>
              <Field name="username" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <FormLabel htmlFor="username" color="#fff" mt="15px">
                      UserName
                    </FormLabel>
                    <Input
                      {...field}
                      id="username"
                      color="#fff"
                      placeholder="Enter username"
                    />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validateField}>
                {({ field, form }) => (
                  <FormControl
                    mt="15px"
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password" color="#fff">
                      Passcode
                    </FormLabel>
                    <Input
                      {...field}
                      color="#fff"
                      id="password"
                      placeholder="Enter Passcode"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>{" "}
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <Button
                  mt={4}
                  bg="white"
                  colorScheme="whiteAlpha"
                  isLoading={props.isSubmitting}
                  onClick={() => {
                    console.log(props.values);
                    history.push("/home")
                  }}
                  color="#254159"
                  mx="auto"
                  padding="18px 70px"
                  fontSize="14px"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default BottomDiv;
