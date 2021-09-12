import styled from "styled-components";
import { COLOR } from "../../utils/ui-style/colors";

export const Button = styled.span<{
  color: string;
}>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  background-color: transparent;
  color: ${(p) => p.color};
  font-size: 14px;
  font-weight: 500;
  line-height: 34px;
  overflow: hidden;
  outline: none;
  cursor: pointer;

  &.outlined {
    border: solid 1px;
  }

  &.filled {
    background-color: ${(p) => p.color};
    color: ${COLOR.WHITE};
  }

  &::-moz-focus-inner {
    border: none;
  }

  /* Overlay */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
  }

  /* Ripple */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px;
    height: 32px;
    background-color: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  /* Hover, Focus */
  &:hover::before {
    opacity: 0.04;
  }

  &:focus::before {
    opacity: 0.12;
  }

  &:hover:focus::before {
    opacity: 0.16;
  }

  /* Active */
  &:active::after {
    opacity: 0.16;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
`;

export const ButtonRadius = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 32px;
`;
