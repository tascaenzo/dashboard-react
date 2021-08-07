import styled from "styled-components";
import { COLOR } from "../../utils/ui-style";

export const Buttun = styled.span<{
  color: string;
  width: string;
  height: string;
  fontSize: string;
}>`
  //background-color: ${(p) => p.color};
  background-color: #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: ${(p) => (p.width == p.height ? "50%" : "4px")};
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(38, 50, 56, 0.3);
  color: ${COLOR.WHITE};
  font-size: ${(p) => (p.fontSize)};
  background-position: center;
  transition: background-color 0.8s;
  text-transform: uppercase;

  &:hover {
    background-color: #47a7f5;
    background-image: radial-gradient(circle, transparent 1%, #47a7f5 1%);
    background-position: center;
    background-size: 15000%;
  }

  &:active {
    transition: background 0s;
    background-color: #6eb9f7;
    background-size: 100%;
  }
`;
