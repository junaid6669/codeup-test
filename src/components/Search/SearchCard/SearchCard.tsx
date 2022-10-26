import { FC } from "react";
import styled from "styled-components";

const SearchCardStyle = styled.div`
  padding: 24px;
  gap: 24px;
  border-radius: 16px;
  > p {
    display: flex;
    font-weight: bold;
  }
`;

const Card = styled.div`
  position: relative;
  padding: 24px;
  border: 1px solid #e3e5e6;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  display: flex;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;
const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #787878;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;

const Grid = styled.div`
  width: 25%;
`;

interface SearchCardProps {
  foundElements: any[];
}

const SearchCard: FC<SearchCardProps> = ({ foundElements }) => {
  return (
    <SearchCardStyle>
      <p>{foundElements.length} Suggestions</p>

      {foundElements.map((ele) => {
        return (
          <Card>
            <CardBody>
              <Grid>
                <CardTitle>Product</CardTitle>
                <CardSubtitle>{`${ele.brand} ${ele.model}`}</CardSubtitle>
              </Grid>
              <Grid>
                <CardTitle>Spec</CardTitle>
                <CardSubtitle>{`${ele.capacity}GB / ${ele.color}`}</CardSubtitle>
              </Grid>
              <Grid>
                <CardTitle>SKU</CardTitle>
                <CardSubtitle>{`${ele.sku}`}</CardSubtitle>
              </Grid>
              <Grid>
                <CardTitle>Price</CardTitle>
                <CardSubtitle>{`${"$" + ele.price}`}</CardSubtitle>
              </Grid>
            </CardBody>
          </Card>
        );
      })}
    </SearchCardStyle>
  );
};

export default SearchCard;
