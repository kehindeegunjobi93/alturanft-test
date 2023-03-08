export const fetchData = async (address) => {
  const response = await fetch(
    `https://api.opensea.io/api/v1/assets?asset_contract_address=${address}&order_direction=asc`,
    {
      headers: { Accept: "application/json" },
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};
