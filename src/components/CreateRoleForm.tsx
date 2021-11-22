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
function CreateRoleForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box px="30px">
      <Link color="grey" to="/home" as={NavLink}>
        Back
      </Link>
      <Text textAlign="center" mt="15px" color="#254159">
        Create Role
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
            <Field name="name" validate={validateField}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name" color="gray" mt="50px">
                    Name of Agent
                  </FormLabel>
                  <Input
                    variant="outline"
                    colorScheme="blackAlpha"
                    size="md"
                    color="grey"
                    {...field}
                    id="name"
                    placeholder="Enter Name of Agent"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>{" "}
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email" color="gray" mt="20px">
                    Agent Email Address
                  </FormLabel>
                  <Input
                    variant="outline"
                    colorScheme="blackAlpha"
                    size="md"
                    color="grey"
                    {...field}
                    id="email"
                    placeholder="Agent Email Address"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>{" "}
            <Field name="password" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel htmlFor="password" color="gray" mt="20px">
                    Agent Passcode
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      {...field}
                      id="password"
                      color="gray"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        bg="gray"
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>{" "}
            <Field name="role" validate={validateField}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="role" color="gray" mt="20px">
                    Select Role
                  </FormLabel>
                  <Select
                    id="role"
                    {...field}
                    placeholder="Select role"
                    color="grey"
                    size="md"
                  >
                    <option value="supervisor">Supervisor</option>
                    <option value="mapper">Mapper</option>
                  </Select>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
  );
}

export default CreateRoleForm;

export function validateField(value) {
  let error;
  if (!value) {
    error = "Field is required";
  }
  return error;
}

export function validateEmail(values) {
  let error;
  if (!values) {
    error = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values)) {
    error = "Invalid email address";
  }
  return error;
}
