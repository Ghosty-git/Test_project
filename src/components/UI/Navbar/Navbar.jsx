import React, { useState } from "react";
import { Layout, Header, Menu, Button, Row, Modal } from "antd";
import { Link } from "react-router-dom";
import Icon from "@ant-design/icons/lib/components/Icon";
import logo from "../../../img/image2vector (1).svg";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../store/actions/auth";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.auth);
  return (
    <>
      <div style={{ height: "80px" }}></div>
      <Layout.Header
        style={{
          background: "#FFD304",
          position: "fixed",
          width: "100%",
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: "0",
        }}
      >
        <div style={{ width: "100px", height: "80px" }}>
          <img
            src={logo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="logo"
          />
        </div>
        <Menu mode="horizontal" className="menu">
          <Menu.Item>
            Главная
            <Link to="/home" />
          </Menu.Item>
          <Menu.Item>
            Вакансии
            <Link to="/vacancies" />
          </Menu.Item>
          <Menu.Item>
            Контакты
            <Link to="/contact" />
          </Menu.Item>
          <Menu.Item style={{ marginLeft: "300px" }}>
            Войти
            <Link to="login" />
          </Menu.Item>
          <Menu.Item>
            <Button className="button" type="primary" shape="round">
              Создать резюме
            </Button>
            <Link to="/createresume" />
          </Menu.Item>
        </Menu>
      </Layout.Header>

      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        height={500}
      ></Modal>
    </>
  );
};

export default Navbar;
