export const fetchExchange = async () => {
  const auth = "FgYNZJ7yTBdsSsUAMTxqGaBP0wNkwGsR";
  const data = await (
    await fetch(
      `/site/program/financial/exchangeJSON?authkey=${auth}&data=AP01`
    )
  ).json();
  console.log(data);
  return data;
};
