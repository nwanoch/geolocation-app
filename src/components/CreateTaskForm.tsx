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
            <Field name="address" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.address && form.touched.address}
                >
                  <FormLabel htmlFor="address" color="gray" mt="20px">
                    Location to Map
                  </FormLabel>
                  <Input
                    variant="outline"
                    colorScheme="blackAlpha"
                    size="md"
                    color="grey"
                    {...field}
                    id="text"
                    _placeholder={{ fontSize: "12px" }}
                    placeholder="Enter address to map"
                  />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                </FormControl>
              )}
            </Field>{" "}
            <Flex justify="space-between">
              <Box w="49%">
                {" "}
                <Field name="long" validate={validateField}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.long && form.touched.long}
                    >
                      <FormLabel htmlFor="email" color="gray" mt="20px">
                        Longtitude Center
                      </FormLabel>
                      <Input
                        variant="outline"
                        colorScheme="blackAlpha"
                        size="md"
                        color="grey"
                        {...field}
                        id="long"
                        type="number"
                        _placeholder={{ fontSize: "12px" }}
                        placeholder="longitude"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>{" "}
              </Box>
              <Box w="49%">
                {" "}
                <Field name="lat" validate={validateField}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.lat && form.touched.lat}
                    >
                      <FormLabel htmlFor="lat" color="gray" mt="20px">
                        Latitude Center
                      </FormLabel>
                      <Input
                        variant="outline"
                        colorScheme="blackAlpha"
                        size="md"
                        color="grey"
                        {...field}
                        id="lat"
                        type="number"
                        placeholder="Latitude"
                        _placeholder={{ fontSize: "12px" }}
                      />
                      <FormErrorMessage>{form.errors.lat}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>{" "}
              </Box>
            </Flex>
            <Field name="mapper" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.mapper && form.touched.mapper}
                >
                  <FormLabel htmlFor="role" color="gray" mt="20px">
                    Assign Mapper
                  </FormLabel>
                  <Select
                    id="mapper"
                    {...field}
                    placeholder="Select Mapper"
                    color="grey"
                    size="md"
                    fontSize="12px"
                    _placeholder={{ fontSize: "12px" }}
                  >
                    <option value="mapper1">mapper 1</option>
                    <option value="mapper2">mapper 2</option>
                  </Select>
                  <FormErrorMessage>{form.errors.mapper}</FormErrorMessage>
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
