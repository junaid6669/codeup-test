import { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import EmptyResult from "./EmptyResult";
import FilterTextbox from "./FilterTextbox";
import SearchCard from "./SearchCard";
import useMounted from "./../../hooks/useMounted";

import "./Styles.css";
import { catalogueApi } from "../../lib/axios";

const SeachStyle = styled.div`
  > h1 {
    font-size: ${({ theme }) => theme.font18};

    span + span {
      color: ${({ theme }) => theme.primary100};
    }
  }
`;
interface SingleItem {
  id: string;
  createdAt: string;
  searchCount: number;
  sku: string;
  brand: string;
  model: string;
  capacity: string;
  color: string;
  price: number;
  currency: string;
}

interface MultipleItems extends Array<SingleItem> {}

const Search: FC = () => {
  const mounted = useMounted();
  const [text, setText] = useState("");
  const [listData, setListData] = useState<MultipleItems[] | []>([]);
  const [foundElements, setFoundElements] = useState<MultipleItems[] | []>([]);

  const getAllCatalogue = useCallback(async () => {
    try {
      const res: MultipleItems[] = await catalogueApi.getCall("catalogue", {});
      setListData(res);
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getAllCatalogue();
  }, []);

  useEffect(() => {
    if (text !== "") {
      let obj = listData.filter((o: any) => {
        console.log("a", o.sku);

        if (
          o.sku.toLowerCase().includes(text.toLowerCase()) ||
          o.brand.toLowerCase().includes(text.toLowerCase()) ||
          o.model.toLowerCase().includes(text.toLowerCase())
        ) {
          return o;
        }
      });
      setFoundElements(obj);
    } else {
      setFoundElements([]);
    }
  }, [text]);

  return (
    <>
      <div className='SearchBox'>
        <SeachStyle>
          <h1>
            <span>Find a </span>
            <span>product</span>
          </h1>
        </SeachStyle>
        <FilterTextbox setText={setText} />
        {foundElements.length > 0 ? (
          <SearchCard foundElements={foundElements} />
        ) : (
          <EmptyResult />
        )}
      </div>
    </>
  );
};

export default Search;
