import styled from "styled-components";
import { COLOR } from "../../utils/ui-style";

export const Input = styled.input`
  border: none;
  color: ${COLOR.SECONDARY_DARCK};
  font-size: 16px;
  width: 100%;

  &.filled {
    background-color: ${COLOR.SECONDARY_LIGHT};
  }

  &:hover,
  :focus {
    outline: none;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 40px;
  align-items: center;
  margin: 35px 24px 0;
  padding-left: 6px;
  padding-right: 6px;
  transition: 0.3s;

  &.default {
    border-bottom: solid 2px #c7ced1;
    border-radius: 0px;
    padding: 0;
    &.active {
      border-color: ${COLOR.PRIMARY};
    }
  }

  &.outlined {
    border: solid 1px #c7ced1;
    border-radius: 8px;
    &.active {
      border-color: ${COLOR.PRIMARY};
    }
  }

  &.filled {
    background-color: ${COLOR.SECONDARY_LIGHT};
    border-radius: 8px;
  }

  &.error {
    border-color: ${COLOR.ERROR};
  }
`;

export const Label = styled.label`
  position: absolute;
  display: block;
  transition: 0.2s;
  font-size: 16px;
  bottom: 10px;
  transition: 0.3s;
  background-color: #fff;
  color: #a2aaad;

  &.top {
    bottom: 31px;
  }

  &.active {
    bottom: 31px;
    font-size: 14px;
    color: ${COLOR.PRIMARY};
  }

  &.error {
    border-color: ${COLOR.ERROR};
  }
`;

export const Icon = styled.span`
  color: ${COLOR.SECONDARY_DARCK};
  padding-right: 10px;
  padding-top: 4px;
  transition: 0.3s;
  font-size: 18px;
`;

export const Error = styled.label`
  position: absolute;
  display: block;
  color: ${COLOR.ERROR};
  font-size: 12px;
  bottom: -20px;
`;
