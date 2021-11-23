import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Box, Link, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { validateField } from "./CreateRoleForm";

function AssignTaskForm() {
  return (
    <Box px="30px">
      <Link color="grey" to="/home" as={NavLink}>
        Back
      </Link>
      <Text textAlign="center" mt="15px" color="#254159">
        Assign Task
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
            <Field name="taskId" validate={validateField}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.taskId && form.touched.taskId}
                >
                  <FormLabel htmlFor="taskId" color="gray" mt="20px">
                    Task
                  </FormLabel>
                  <Select
                    id="taskId"
                    {...field}
                    placeholder="Select Task"
                    color="grey"
                    size="md"
                    fontSize="12px"
                    _placeholder={{ fontSize: "12px" }}
                  >
                    <option value="mapper1">task 1</option>
                    <option value="mapper2">task 2</option>
                  </Select>
                  <FormErrorMessage>{form.errors.taskId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

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
                Assign
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default AssignTaskForm;
