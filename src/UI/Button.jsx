import { Button as MuiButton, styled } from "@mui/material";

export const Button = ({ children, onClick, disabled, loading, ...rest }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)({
  minWidth: "408px",
  backgroundColor: "#121314",
  padding: 10,
  color: "white",
  "&:hover": {
    backgroundColor: "#1a1c1d",
  },
});
