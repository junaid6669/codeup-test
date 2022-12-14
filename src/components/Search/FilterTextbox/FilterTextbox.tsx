import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { catalogueApi } from "../../../lib/axios";
import avatar from "../../assets/avatar.png";
// import "./Styles.css";

const Input = styled.input`
  height: 48px;
  font-size: 16px;
  width: 50%;
  border: 2px solid #9990ff;
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  background: #ffffff;

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

const StyledInput = styled.div`
  svg {
    position: absolute;
    left: 26%;
    top: 15px;
    padding: 9px 8px;
    fill: black;
    transition: 0.3s;
  }

  input:focus + svg {
    fill: dodgerBlue;
  }

  &.inputWithIcon {
    position: relative;
  }
`;

interface FilterTextboxProps {
  setText(data: string): void;
}

const FilterTextbox: FC<FilterTextboxProps> = ({ setText }) => {
  // const [text, setText] = useState("");

  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <StyledInput className={"inputWithIcon"}>
      <Input
        type='text'
        // value={text}
        onChange={handleChange}
        placeholder='Search'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='36px'
        height='36px'
      >
        <path d='M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z' />
      </svg>
    </StyledInput>
  );
};

export default FilterTextbox;
