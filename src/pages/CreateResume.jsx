import { Cascader } from "antd";
import axios from "axios";
import { Form, Formik, Field } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostService from "../API/PostService";
import banner from "../img/ybanner-1.jpg";

const CreateResume = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [idResume, setIdResume] = useState("");
  const downloadResume = async () => {
    console.log(fileUrl);
    if (!fileUrl) {
    } else {
      await PostService.downloadResume(fileUrl);
    }
  };

  const handleCreateResume = () => {};

  const resumeId = async () => {
    console.log(idResume);
    if (!idResume) {
    } else {
      await PostService.idResume(idResume);
    }
  };

  // const idResume = async () => {
  //   console.log(fileUrl);
  //   if (!fileUrl) {
  //   } else {
  //     await PostService.downloadResume(fileUrl);
  //   }
  // };

  const options = [
    {
      id: "1",
      value: "english",
      label: "Английский",
    },

    {
      id: "2",
      value: "russian",
      label: "Русский",
    },

    {
      id: "3",
      value: "chinese",
      label: "Китайский",
    },

    {
      id: "4",
      value: "arabic",
      label: "Арабский",
    },
  ];

  function onChange(value) {
    console.log(value);
  }
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          height: "330px",
          width: "100%",
          zIndex: "1",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FFD304",
          backgroundPosition: "right",
        }}
      >
        <h1 style={{ zIndex: "2" }}>Создать Резюме</h1>
      </div>
      <Formik
        initialValues={{
          image: "",
          position: "",
          num_passport: "",
          full_name: "",
          nationality_gender: "",
          country_city_of_residence: "",
          date_of_birth: "",
          age_height_weight: "",
          status_children: "",
          health_smoker: "",
          // image_full_height: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          let data = new FormData();
          console.log(values.image)
          data.append("image", values.image);
          const body = {
            ...values,
            // image: image,
          };
          const response = await axios.post(
            "https://zainkg.pythonanywhere.com/api/v1/resume/personal_data/",
            body
          );

          // Скачивание файла
          console.log(response.data.file);
          setFileUrl(response.data.file.trim());
          console.log(JSON.stringify(values));
            console.log(response)
          return  response
        }}
      >
        {(formProps) => (
          <Form>
            <h1>Позиция</h1>
            <Field name="position" type="text" />
            <br />
            <h2>Пасспорт</h2>
            <Field name="num_passport" type="text" />
            <br />
            <h2>Картинка</h2>
            <Field name="image" type="file"
            onChange={(event)=> {
              formProps.setFieldValue("image", event.target.files[0])
            }}
            />
            <br />
            <h2>ФИО</h2>
            <Field name="full_name" type="text" />
            <br />
            <h2>Национальность</h2>
            <Field name="nationality_gender" type="text" />
            <br />
            <h2>Страна</h2>
            <Field name="country_city_of_residence" type="text" />
            <br />
            <h2>Дата рождения</h2>
            <Field name="date_of_birth" type="text" />
            <br />
            <h2>Возрать рост и вес</h2>
            <Field name="age_height_weight" type="text" />
            <br />
            <h2>Есть дети?</h2>
            <Field name="status_children" type="text" />
            <br />
            <h2>Здоровье</h2>
            <Field name="health_smoker" type="text" />
            <br />
            <h2>Полная картинка</h2>
            {/* <Field name="image_full_height" type="file" /> */}
            <br />
            <button type="submit">создать</button>
          </Form>
        )}
      </Formik>
      <br />
      <Formik
        initialValues={{
          language: "",
          written: "",
          spoken: "",
          understanding: "",
        }}
        onSubmit={async (values, id) => {
          const response = await axios.post(
            `https://zainkg.pythonanywhere.com/api/v1/resume/${id}/language/`,
            values
          );
        }}
      >
        <Form>
          <h2>Языки</h2>
          <Cascader
            name="language"
            options={options}
            onChange={onChange}
            placeholder="Выберите язык"
          />
          <h2>Чтение</h2>
          <Field name="written" type="text" />
          <br />
          <h2>Разговорный</h2>
          <Field name="spoken" type="text" />
          <br />
          <h2>Понимание</h2>
          <Field name="understanding" type="text" />
          <button type="submit">сохранить</button>
        </Form>
      </Formik>

      <button onClick={downloadResume}>Скачать</button>
      <br />
      {fileUrl && (
        <Link
          to={{ pathname: "https://zainkg.pythonanywhere.com/" + fileUrl }}
          target="_blank"
        >
          zczds
        </Link>
      )}
    </div>
  );
};

export default CreateResume;
