import { Asset } from './Assets';

const API_KEY = "5df9246ffdmsha8a65ac03eb4012p1fd0b8jsn5332cfaafc10"

export enum PricerErrorKind {
  UNSPECIFIED = "Unknown",
  SOURCE_DESTINATION_EQUAL = "Source and destination asset must differ, but are the same",
  SOURCE_DESTINATION_NOT_USD = "Either source or destination asset must be USD, but neither were",
  INSUFFICIENT_BALANCE = "Attempted to sell source asset without sufficient balance",
  NEGATIVE_QUOTE_PRICE = "Unexpected negative quote price received",
}

export class PricerError extends Error {
  constructor(kind: PricerErrorKind) {
    super(kind);
    Object.setPrototypeOf(this, PricerError.prototype);
  }
}

// ICoinPrice represents the price for an asset pair, which is a source (what
// we are selling) and destination (what we are buying).
export interface ICoinPrice {
  // Source is the currency we are pricing from.
  Source: Asset;

  // Destination is the currency we are pricing to. i.e. we want to sell Source
  // to buy Destination.
  Destination: Asset;

  // Price is the price of one unit of the destination currency, expressed in
  // terms of the Source currency. The price is returned from RapidAPI.
  //
  // For example:
  //
  // - if Source is USD and Destination is BTC, Price is the amount of USD
  //   required to buy one BTC.
  // - if Source is ETH and Destination is USD, Price is the amount of ETH
  //   required to buy one USD.
  //
  // For this exercise, you can represent money in floating point arithmetic.
  // Ignore any accuracy/rounding issues.
  Price: number;
}

// TODO implement this interface to retrieve the price for the requested asset
// from the RapidAPI "Get Coin" endpoint.
//
// You need to support six pairs:
//
// - USD to BTC
// - USD to ETH
// - USD to ADA
// - BTC to USD
// - ETH to USD
// - ADA to USD
//
// As RapidAPI only provides pairs with USD, you don't need to support crypto
// source to crypto destination.
//
// One of source and destination must be USD.
// Source and destination must not be the same.
//
// An exception should be thrown if an unsupported combination of assets is
// requested.
//
// https://rapidapi.com/Coinranking/api/coinranking1/




export interface IPricingProvider {
  getCoinPrice: (source: Asset, destination: Asset) => Promise<ICoinPrice>;
};

// TODO implement MyPricer using the RapidAPI Get Coin endpoint.
//
// Hint: the Asset enum's values correspond with the ID of the USD/coin pairs
// in the GetCoin API.
export class MyPricer implements IPricingProvider {
  public getCoinPrice(source: Asset, destination: Asset): Promise<ICoinPrice> {
    return new Promise(async (resolve, reject) => {
      if (source === destination) {
        throw new PricerError(PricerErrorKind.SOURCE_DESTINATION_EQUAL);
      } else if (source !== Asset.USD && destination !== Asset.USD) {
        throw new PricerError(PricerErrorKind.SOURCE_DESTINATION_NOT_USD)
      }
      await fetch("https://coinranking1.p.rapidapi.com/coin/" + destination + "/price?referenceCurrencyUuid=" + source, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": API_KEY
        }
      })
        .then(response => {
          return response.json()
        })
        .then((json) => {
          resolve({
            Source: source,
            Destination: destination,
            Price: json.data.price
          })
        })
        .catch(err => {
          reject(err);
        });
    })
  }
}

// LocalPricer is a simple implementation that just prices all assets at 100
// USD. It can be used for simple testing.
export class LocalPricer implements IPricingProvider {
  public getCoinPrice(source: Asset, destination: Asset): Promise<ICoinPrice> {
    const assetPrice = 100.00;

    return Promise.resolve({
      Source: source,
      Destination: destination,
      Price: (source === Asset.USD ? assetPrice : 1 / assetPrice),
    });
  }
}