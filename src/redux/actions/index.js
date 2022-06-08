export function addSelectItem(data) {
  return {
    type: "SELECTED_MARKET_ITEM",
    payload: data,
  };
}
