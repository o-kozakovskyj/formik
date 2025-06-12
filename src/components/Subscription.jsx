import { useFormikContext, ErrorMessage } from "formik";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

const Subscription = () => {
  const { values, handleChange, errors } = useFormikContext();

  return (
    <Box sx={{ mb: 5, backgroundColor: "#f0f4ff", p: 3, borderRadius: 2 }}>
      <FormControl component="fieldset" error={Boolean(errors.radioChoice)}>
        <FormLabel component="legend" sx={{ mb: 1 }}>
          Subscription Plan
        </FormLabel>
        <RadioGroup
          name="radioChoice"
          value={values.radioChoice}
          onChange={handleChange}
        >
          <FormControlLabel
            value="free"
            control={<Radio />}
            label="Free Plan"
          />
          <FormControlLabel
            value="basic"
            control={<Radio />}
            label="Basic Plan"
          />
          <FormControlLabel
            value="premium"
            control={<Radio />}
            label="Premium Plan"
          />
          <FormControlLabel
            value="enterprise"
            control={<Radio />}
            label="Enterprise Plan"
          />
        </RadioGroup>
        <FormHelperText>
          <ErrorMessage name="radioChoice" />
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Subscription;
