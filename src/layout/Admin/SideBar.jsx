import { styled } from "@mui/material";
import { ReactComponent as AdminLogo } from "../../assets/adminLogo.svg";
import { ReactComponent as FemaleIcon } from "../../assets/woman.svg";
import { ReactComponent as MaleIcon } from "../../assets/man-beard.svg";
import { ReactComponent as ChildIcon } from "../../assets/child.svg";
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  const { pathname } = useLocation();

  const isActie = (path) => pathname === `/admin/${path}`;

  console.log(pathname);
  return (
    <Container>
      <Wrapper>
        <AdminLogo />
      </Wrapper>
      <List>
        <StyledLink to={"male"}>
          <Menu active={isActie("male")}>
            <MaleIcon />
            <MenuTitle>Мужская</MenuTitle>
          </Menu>
        </StyledLink>

        <StyledLink to={"children"}>
          <Menu active={isActie("children")}>
            <ChildIcon />
            <MenuTitle>Детская</MenuTitle>
          </Menu>
        </StyledLink>

        <StyledLink to={"female"}>
          <Menu active={isActie("female")}>
            <FemaleIcon />
            <MenuTitle>Женская</MenuTitle>
          </Menu>
        </StyledLink>
      </List>
    </Container>
  );
};
const Wrapper = styled("div")`
  padding: 40px 20px 0px 20px;
`;
const Container = styled("aside")`
  position: fixed;
  left: 0;
  top: 0;
  width: 218px;
  background-color: #2e0de6;
  height: 100vh;
`;

const List = styled("ul")`
  margin-top: 62px;
`;

const Menu = styled("li")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 28px 12px 18px;
  background-color: ${(props) => (props.active ? "green" : "none")};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const MenuTitle = styled("span")`
  color: #7e8494;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
