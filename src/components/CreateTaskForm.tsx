import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
function CreateTaskForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box px="30px">
      <Link color="grey" to="/home" as={NavLink}>
        Back
      </Link>
      <Text textAlign="center" mt="15px" color="#254159">
        Create Task
      </Text>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="taskTitle" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.taskTitle && form.touched.taskTitle}
                >
                  <FormLabel htmlFor="taskTitle" color="gray" mt="30px">
                    Task Title
                  </FormLabel>
                  <Input
                    variant="outline"
                    colorScheme="blackAlpha"
                    size="md"
                    color="grey"
                    {...field}
                    _placeholder={{ fontSize: "12px" }}
                    id="taskTitle"
                    placeholder="e.g ojota farm mapping"
                  />
                  <FormErrorMessage>{form.errors.taskTitle}</FormErrorMessage>
                </FormControl>
              )}
            </Field>{" "}
            <Field name="description" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                >
                  <FormLabel htmlFor="address" color="gray" mt="20px">
                    Description
                  </FormLabel>
                  <Input
                    variant="outline"
                    colorScheme="blackAlpha"
                    size="md"
                    color="grey"
                    {...field}
                    id="description"
                    type="text"
                    _placeholder={{ fontSize: "12px" }}
                    placeholder="Enter Task details"
                  />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>{" "}
            <Box textAlign="center" mt="20px">
              {" "}
              <Button
                mt={4}
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
                bg="#254159"
              >
                Create
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default CreateTaskForm;

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
