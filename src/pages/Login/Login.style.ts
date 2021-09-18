import styled from "styled-components";
import { COLOR } from "../../utils/ui-style";
import { ReactComponent as LoginIcon } from "../../utils/svg/login.svg";

export const BackgroundContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f4f3;
  justify-content: center;
  padding: 50px 30px 50px 30px;
`;

export const CircleBottom = styled.div`
  position: fixed;
  bottom: -100px;
  left: -100px;
  background-color: #f9c33b;
  border-radius: 50%;
  height: 280px;
  width: 280px;
  z-index: 1;
`;

export const CircleTop = styled.div`
  position: fixed;
  top: -150px;
  right: -100px;
  background-color: #3ab399;
  border-radius: 50%;
  height: 400px;
  width: 400px;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  border-radius: 40px;
  width: 100%;
  background-color: white;
  z-index: 2;
  box-shadow: 0 2px 12px 0 rgba(38, 50, 56, 0.2);
  max-width: 1200px;
  min-height: 500px;
`;

export const Left = styled.div`
  display: flex;
  background-color: ${COLOR.PRIMARY};
  max-width: 500px;
  border-radius: 40px 0 0 40px;
  height: 100%;
  width: 80%;
  transition: 1s;

  @media screen and (max-width: 960px) {
    width: 0%;
    border-radius: 40px;
  }
`;

export const Right = styled.div`
  flex-direction: column;
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0 40px 40px 0;
  height: 100%;
  width: 100%;
  transition: 1s;

  @media screen and (max-width: 960px) {
    border-radius: 40px;
  }
`;

export const LoginImg = styled(LoginIcon)`
  position: relative;
  bottom: calc(-100vh + 380px);
  left: 240px;
  height: 280px;
  &.svg > path {
    fill: ${COLOR.PRIMARY};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AvatarConainer = styled.div`
  margin-top: 35px;
  width: 320px;
  text-align: center;
`;

export const Footer = styled.footer`
  text-align: center;
  margin: 30px;
  font-size: 12px;
  color: ${COLOR.SECONDARY};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
