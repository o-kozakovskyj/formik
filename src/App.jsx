/* eslint-disable react/prop-types */
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const validationSchema = [
  Yup.object({
    firstName: Yup.string()
      .required("Обов'язкове поле")
      .min(3, "Мінімум 3 символи"),
    lastName: Yup.string().required("Обов'язкове поле"),
  }),
  Yup.object({
    email: Yup.string().email("Некоректний email").required("Обов'язкове поле"),
    phone: Yup.string()
      .matches(/^\+?\d{10,15}$/, "Некоректний номер телефону")
      .required("Обов'язкове поле"),
  }),
  Yup.object({
    password: Yup.string()
      .min(6, "Мінімум 6 символів")
      .required("Обов'язкове поле"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролі мають співпадати")
      .required("Обов'язкове поле"),
  }),
];

const Step1 = ({ handleChange, values, errors, touched }) => (
  <Box>
    <TextField
      fullWidth
      name="firstName"
      label="Ім'я"
      margin="normal"
      onChange={handleChange}
      value={values.firstName}
      error={touched.firstName && Boolean(errors.firstName)}
      helperText={touched.firstName && errors.firstName}
    />
    <TextField
      fullWidth
      name="lastName"
      label="Прізвище"
      margin="normal"
      onChange={handleChange}
      value={values.lastName}
      error={touched.lastName && Boolean(errors.lastName)}
      helperText={touched.lastName && errors.lastName}
    />
  </Box>
);

const Step2 = ({ handleChange, values, errors, touched }) => (
  <Box>
    <TextField
      fullWidth
      name="email"
      label="Email"
      margin="normal"
      onChange={handleChange}
      value={values.email}
      error={touched.email && Boolean(errors.email)}
      helperText={touched.email && errors.email}
    />
    <TextField
      fullWidth
      name="phone"
      label="Телефон"
      margin="normal"
      onChange={handleChange}
      value={values.phone}
      error={touched.phone && Boolean(errors.phone)}
      helperText={touched.phone && errors.phone}
    />
  </Box>
);

const Step3 = ({ handleChange, values, errors, touched }) => (
  <Box>
    <TextField
      fullWidth
      type="password"
      name="password"
      label="Пароль"
      margin="normal"
      onChange={handleChange}
      value={values.password}
      error={touched.password && Boolean(errors.password)}
      helperText={touched.password && errors.password}
    />
    <TextField
      fullWidth
      type="password"
      name="confirmPassword"
      label="Підтвердити пароль"
      margin="normal"
      onChange={handleChange}
      value={values.confirmPassword}
      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
      helperText={touched.confirmPassword && errors.confirmPassword}
    />
  </Box>
);

const steps = ["Персональні дані", "Контактна інформація", "Пароль"];

const App = () => {
  const [step, setStep] = useState(0);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema[step]}
      onSubmit={(values) => console.log("Submitted:", values)}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        validateForm,
        setTouched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {step === 0 && (
            <Step1
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          )}
          {step === 1 && (
            <Step2
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          )}
          {step === 2 && (
            <Step3
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          )}

          <Box display="flex" justifyContent="space-between" mt={2}>
            {step > 0 && (
              <Button variant="contained" onClick={() => setStep(step - 1)}>
                Назад
              </Button>
            )}
            {step < steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={async () => {
                  setTouched({
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true,
                    password: true,
                    confirmPassword: true,
                  });
                  const errors = await validateForm();
                  if (Object.keys(errors).length === 0) setStep(step + 1);
                }}
              >
                Далі
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                Завершити
              </Button>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default App;
