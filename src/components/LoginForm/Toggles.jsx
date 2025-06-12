import { Field, ErrorMessage } from "formik";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
  FormHelperText,
} from "@mui/material";

const Toggles = () => (
  <Box sx={{ mb: 5, p: 2, backgroundColor: "#e8f5e9", borderRadius: 2 }}>
    <FormGroup>
      <FormControlLabel
        control={<Field as={Checkbox} name="subscribe" />}
        label="Subscribe to email alerts"
      />
      <FormControlLabel
        control={<Field as={Switch} name="newsletter" />}
        label="Enable newsletter subscription"
      />
      <FormControlLabel
        control={<Field as={Checkbox} name="terms" />}
        label="I accept the terms and conditions"
      />
      <FormHelperText sx={{ color: "error.main" }}>
        <ErrorMessage name="terms" />
      </FormHelperText>
    </FormGroup>
  </Box>
);

export default Toggles;
