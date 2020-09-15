import React from "react";
import { Formik, Field } from "formik";
import {
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage, 
  Text
} from "@chakra-ui/core";
import { Layout } from "../components/Layout";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {

  return (
    <Layout>
        <Text textAlign="center" as={"h1"} fontSize="32px" >Register</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions, ) => {
          setTimeout(() =>  {
            actions.setSubmitting(false);
          }, 2000);
        }}
      >
        {({values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="username">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel htmlFor="name">Username</FormLabel>
                  <Input {...field} id="name" onChange={handleChange} value={values.username} placeholder="Username" />
                  {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                </FormControl>
              )}
            </Field>
            <br />
            <Field name="password">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input {...field} type="password" id="password" onChange={handleChange} value={values.password} placeholder="Password" />
                  {/* <FormErrorMessage>{form.errors.password}</FormErrorMessage> */}
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              variantColor="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default Register;
