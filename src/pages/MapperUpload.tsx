import { IonContent, IonPage } from "@ionic/react";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Link, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { validateEmail, validateField } from "../components/CreateRoleForm";
import Greeting from "../components/Greeting/Greeting";
function MapperUpload() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <IonPage>
      <IonContent fullscreen>
        <Box minH="100vh" bg="white">
          <Greeting />
          <Box px="30px">
            <Link color="grey" to="/home" as={NavLink}>
              Back
            </Link>
            <Text textAlign="center" mt="15px" color="#254159">
              Task Submission
            </Text>
            <Formik
              initialValues={{ name: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <Field name="task" validate={validateField}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.task && form.touched.task}
                      >
                        <FormLabel htmlFor="task" color="gray" mt="20px">
                          Select Task
                        </FormLabel>
                        <Select
                          id="role"
                          {...field}
                          placeholder="Select Completed Task"
                          color="grey"
                          size="md"
                        >
                          <option value="supervisor">T1</option>
                          <option value="mapper">T2</option>
                        </Select>
                        <FormErrorMessage>{form.errors.task}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="file" validate={validateField}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.file && form.touched.file}
                      >
                        <FormLabel htmlFor="file" color="gray" mt="20px">
                          upload zip file
                        </FormLabel>
                        {/* <Select
                          id="role"
                          {...field}
                          placeholder="Select Completed Task"
                          color="grey"
                          size="md"
                        >
                          <option value="supervisor">T1</option>
                          <option value="mapper">T2</option>
                        </Select> */}

                        <Input
                          type="file"
                          {...field}
                          placeholder="select shapefile"
                        />
                        <FormErrorMessage>{form.errors.file}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Box textAlign="center" mt="20px">
                    {" "}
                    <Button
                      mt={4}
                      colorScheme="blue"
                      isLoading={props.isSubmitting}
                      type="submit"
                      bg="#254159"
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
}

export default MapperUpload;
