import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../store/actions/auth";

const Register = () => {
    const dispatch = useDispatch()
    const {signup} = useSelector((state) => state.auth)
    // console.log(signup)
  return (
    <div>
      <h1>Регистрация</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          first_name: "",
          last_name: "",
        }}
        onSubmit={(values) => {
        dispatch(signupAction(values));
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form>

            <h1>Логин</h1>
          <Field name="username" type="text" />
          <br />
          <h2>почта</h2>
          <Field name="email" type="email" />
            <br />
            <h2>пароль</h2>
          <Field name="password" type="password"/>
          <h2>Имя</h2>
          <Field name="first_name" type="first_name"/>
          <h2>фамилия</h2>
          <Field name="last_name" type="last_name"/>
          <br />
          <button type="submit" disabled = {signup.loading ?  true : false}>Зарегаться</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
