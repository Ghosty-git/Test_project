import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/actions/auth";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch()
  const { login } = useSelector((state) => state.auth);
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        
        onSubmit={(values) => {
          dispatch(loginAction(values));
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <h1>Логин</h1>
        <Field name="username" type="text" />
        <br />
        <h2>Пароль</h2>
        <Field name="password" type="password" />
        <br />
        <button type="submit" disabled = {login.loading ?  true : false}>войти</button>
         <Link to="/register">У вас нет аккаунта? Зарегестрироваться</Link>
        </Form>
      </Formik>
      {/* <div>
          <Link to="/register">Регистрцаия</Link>
      </div> */}
    </>
  );
};

export default Login;
