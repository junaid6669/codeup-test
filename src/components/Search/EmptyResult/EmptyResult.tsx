import { FC } from "react";
import styled from "styled-components";

const EmptyStyle = styled.div`
  > p {
    font-size: ${({ theme }) => theme.font18};
    color: #000000;

    span {
      background: #c9f0ff;
      padding: 8px 16px;
      border-radius: 8px;
      color: ${({ theme }) => theme.primary100};
    }
  }
`;

const EmptyResult: FC = () => {
  return (
    <EmptyStyle>
      <p>
        <span>Tip</span> You can search by product brand, model or SKU
      </p>
    </EmptyStyle>
  );
};

export default EmptyResult;
