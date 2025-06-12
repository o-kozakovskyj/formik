import { Field, ErrorMessage, useFormikContext } from "formik";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormHelperText,
} from "@mui/material";

const fields = [
  ["selectOne", "Country", ["USA", "Canada", "Mexico"]],
  ["selectTwo", "City", ["New York", "Toronto", "Mexico City"]],
  ["selectThree", "Department", ["Sales", "Marketing", "Engineering"]],
];

const Preferences = () => {
  const { values, handleChange, errors } = useFormikContext();

  return (
    <Box sx={{ mb: 5, backgroundColor: "#f9f9f9", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Preferences
      </Typography>
      {fields.map(([name, label, options]) => (
        <FormControl
          key={name}
          fullWidth
          sx={{ mb: 2 }}
          error={Boolean(errors[name])}
        >
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Field
            as={Select}
            labelId={`${name}-label`}
            name={name}
            value={values[name]}
            label={label}
            onChange={handleChange}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option.toLowerCase()}>
                {option}
              </MenuItem>
            ))}
          </Field>
          <FormHelperText>
            <ErrorMessage name={name} />
          </FormHelperText>
        </FormControl>
      ))}
    </Box>
  );
};

export default Preferences;
