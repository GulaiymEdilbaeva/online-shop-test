import { styled } from "@mui/material";

export const FormWrapper = ({ children, onSubmit }) => {
  return (
    <Wrapper>
      <FormBlock onSubmit={onSubmit}> {children}</FormBlock>
    </Wrapper>
  );
};
const Wrapper = styled("div")`
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormBlock = styled("form")`
  width: 411px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 39px;
`;
