import React, { useState } from "react";
import { useQuery } from "react-query";

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

const fetchExchange = async () => {
  const auth = "FgYNZJ7yTBdsSsUAMTxqGaBP0wNkwGsR";
  const data = await (
    await fetch(
      `/site/program/financial/exchangeJSON?authkey=${auth}&data=AP01`
    )
  ).json();

  return data;
};

function App() {
  const { isLoading, data } = useQuery<Change[]>("exchange", fetchExchange);
  const [value, setValue] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div>
            <label htmlFor="exchange">통화명 </label>
            <select name="countries1" id="exchange1" onChange={onChange}>
              {data?.map((data) => (
                <option key={data.cur_nm} value={data.bkpr}>
                  {data.cur_nm} {data.cur_unit}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>첫번째국가: {value}</h2>
          </div>
        </>
      )}
    </>
  );
}

export default App;
