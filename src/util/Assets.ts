// Indices correspond to the incides of the asset in RapidAPI GetCoin API to
// request a price.
export enum Asset {
  USD = "yhjMzLPhuIDl",
  BTC = "Qwsogvtv82FCd",
  ETH = "razxDUgYGNAdQ",
  ADA = "qzawljRxB5bYu",
};

export function getAssetName(asset: Asset) {
  switch (asset) {
    case Asset.USD:
      return "USD"
    case Asset.BTC:
      return "Bitcoin"
    case Asset.ETH:
      return "Ethereum"
    case Asset.ADA:
      return "Cordano"
    default:
      return "Not set: " + asset
  }
}