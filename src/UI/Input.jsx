import { styled } from "@mui/system";
import { InputAdornment, TextField } from "@mui/material";
import { forwardRef } from "react";
import { AccountCircle } from "@mui/icons-material";

export const Input = forwardRef(
  ({ value, onChange, label, withIcon, ...rest }, ref) => {
    return (
      <StyledInput
        label={label}
        InputProps={
          withIcon
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }
            : {}
        }
        variant="outlined"
        inputRef={ref}
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
);

const StyledInput = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "12px 16px",
  },
});
