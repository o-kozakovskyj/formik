import { useState } from "react";
import { useFormikContext } from "formik";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const BasicInfo = () => {
  const { values, errors, touched, handleChange, validateOnChange } =
    useFormikContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Box sx={{ mb: 5, backgroundColor: "#f9f9f9", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Basic Information
      </Typography>
      <TextField
        fullWidth
        name="name"
        label="Full Name"
        value={values.name}
        onChange={handleChange}
        error={errors.name && (touched.name || validateOnChange)}
        helperText={errors.name && (touched.name || validateOnChange)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="address"
        label="Address"
        value={values.address}
        onChange={handleChange}
        error={Boolean(errors.address)}
        helperText={errors.address}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        name="email"
        label="Email Address"
        // placeholder="test@example.com"
        value={values.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
        sx={{ mb: 2 }}
        
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}

      />
    </Box>
  );
};

export default BasicInfo;
