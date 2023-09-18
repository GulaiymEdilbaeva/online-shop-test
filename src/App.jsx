import { styled } from "@mui/material";
import { SignUpForm } from "./components/SignUpForm";
import { Header } from "./layout/Header";

function App() {
  return (
    <Contenet>
      <Header />
      <SignUpForm />
    </Contenet>
  );
}

const Contenet = styled("div")`
  margin-top: 20px;
  margin-right: 120px;
  margin-left: 120px;
`;

export default App;
