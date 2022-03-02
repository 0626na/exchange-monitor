export const fetchExchange = async () => {
  const auth = "FgYNZJ7yTBdsSsUAMTxqGaBP0wNkwGsR";
  const data = await (
    await fetch(
      `https://reactproxyserver.herokuapp.com/https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${auth}&data=AP01`
    )
  ).json();

  return data;
};
