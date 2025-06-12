
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Typography, CircularProgress, Fade } from "@mui/material";
import AutoSave from "./AutoSave";
import BasicInfo from "./BasicInfo";
import Subscription from "../Subscription";
import Preferences from "./Preferences";
import Toggles from "./Toggles";


const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Only letters are allowed")
    .min(2)
    .required(),
  address: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  radioChoice: Yup.string().required(),
  selectOne: Yup.string().required(),
  selectTwo: Yup.string().required(),
  selectThree: Yup.string().required(),
  terms: Yup.boolean().oneOf([true]),
  subscribe: Yup.boolean(),
  newsletter: Yup.boolean(),
});

const LoginForm = () => {
  return (
    <Formik
      validateOnChange
      validateOnBlur={false}
      enableReinitialize
      initialValues={
        JSON.parse(localStorage.getItem("draftForm")) || {
          name: "",
          address: "",
          email: "",
          password: "",
          radioChoice: "",
          selectOne: "",
          selectTwo: "",
          selectThree: "",
          terms: false,
          subscribe: false,
          newsletter: false,
        }
      }
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log("Submitting...", values);
        setTimeout(() => actions.setSubmitting(false), 2000);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <AutoSave />
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            User Registration
          </Typography>

          <BasicInfo />
          <Subscription />
          <Preferences />
          <Toggles />

          <Box sx={{ position: "relative", display: "inline-flex", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={!isValid || isSubmitting}
            >
              Submit Registration
            </Button>
            <Fade in={isSubmitting} unmountOnExit>
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  mt: "-12px",
                  ml: "-12px",
                }}
              />
            </Fade>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
