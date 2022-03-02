import React from "react";
import { useQuery } from "react-query";
import { fetchExchange } from "./api";
import styled from "styled-components";
interface Change {
  result: number;
  cur_unit: string;
  ttb: string;
  tts: string;
  deal_bas_r: string;
  bkpr: string;
  yy_efee_r: string;
  ten_dd_efee_r: string;
  kftc_bkpr: string;
  kftc_deal_bas_r: string;
  cur_nm: string;
}

const Display = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1``;
const Today = styled.span`
  font-size: 20px;
`;
const Country = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  border: 1px solid;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 20px;
  background-color: #e1b12c;
  box-shadow: 5px 5px 5px black;
`;

function App() {
  const { isLoading, data } = useQuery<Change[]>("exchange", fetchExchange);
  const today = new Date();
  return (
    <>
      {isLoading ? (
        <Container>
          <h1>Loading...</h1>
        </Container>
      ) : (
        <>
          <Container>
            <Title>현재 환율 정보</Title>
            <Today>기준일 {today.toUTCString()}</Today>
            <Display>
              {data?.map((data) => (
                <Country>
                  <span>
                    통화명: {data.cur_nm} {data.cur_unit}
                  </span>
                  <span>매매기준율: {data.deal_bas_r} ₩</span>
                  <span>송금받을때: {data.ttb} ₩</span>
                  <span>송금보낼때: {data.tts} ₩</span>
                </Country>
              ))}
            </Display>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
