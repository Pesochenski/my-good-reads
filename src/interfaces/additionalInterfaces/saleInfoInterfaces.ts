export interface priceInterface {
  amount: number,
  currencyCode: string,
}
export interface offerInterface {
  finskyOfferType: number,
  listPrice: priceInterface,
  retailPrice: priceInterface,
}