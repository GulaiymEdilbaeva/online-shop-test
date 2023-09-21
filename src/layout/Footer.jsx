import { styled } from "@mui/material";

export const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <InfoContainer>
          <h2>BRANDNAME</h2>
          <InfoBlock>
            <p>О нас </p>
            <p>Контакты</p>
          </InfoBlock>

          <InfoBlock>
            <p>Способы оплаты</p>
            <p>Условия доставки</p>
          </InfoBlock>

          <InfoBlock>
            <p>Пользовательское соглашение</p>
            <p>Политика конфиденциальности</p>
          </InfoBlock>
        </InfoContainer>
      </Wrapper>
      <p>brandname.com 2023 Все права защищены</p>
      <LogoBox>
        <FirstBlock>
          <Logo>Onlineshop</Logo>
          <Logo>Onlineshop</Logo>
        </FirstBlock>
        <SecondBlock>Onlineshop</SecondBlock>
        <SecondBlock>Onlineshop</SecondBlock>
        <SecondBlock>Onlineshop</SecondBlock>
      </LogoBox>
    </FooterStyled>
  );
};

const FooterStyled = styled("footer")`
  text-align: center;
`;

const Wrapper = styled("div")`
  height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #121314;
  border-top: 2px solid #121314;
`;

const InfoContainer = styled("div")`
  max-height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 120px;
  margin-left: 120px;
`;
const InfoBlock = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  & :first-child {
    margin-bottom: 16px;
  }
`;
const LogoBox = styled("div")`
  display: flex;
  margin-top: 20px;
  border-top: 4px;
`;
const FirstBlock = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding-left: 40px;
  background-color: #f2ed72;
  /* border-right: 2px solid ; */
`;

const SecondBlock = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding-left: 50px;
  background-color: #30723f;
`;
const Logo = styled("span")`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
`;
