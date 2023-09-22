import { styled } from "@mui/material";
import { Button } from "../../UI/Button";
import { useLocation } from "react-router-dom";

export const AdminHeader = () => {
  const { pathname } = useLocation();

  const titleByPath = {
    "/admin/female": "Женская",
    "/admin/male": "Мужская",
    "/admin/children": "Детская",
  };
  return (
    <Header>
      <Title>{titleByPath[pathname]}</Title>
      <HeaderButton>+ Добавить</HeaderButton>
    </Header>
  );
};

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 22px 30px 22px 30px;
  border-radius: 10px;
  margin-bottom: 40px;
  background-color: #fff;
`;
const Title = styled("h1")`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
`;
const HeaderButton = styled(Button)`
  min-width: 120px;
  border-radius: 10px;
  background: #121314;
`;
