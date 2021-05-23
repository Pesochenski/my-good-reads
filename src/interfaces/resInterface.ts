import { 
  accessInfoInterface,
  saleInfoInterface, 
  searchInfoInterface, 
  volumeInfoInterface 
} from "./bookInterfaces";

export interface responseInterface {
  kind: string,
  totalItems: number,
  items: Array<bookInterface>,
}

export interface bookInterface {
  kind: string,
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: volumeInfoInterface,
  saleInfo: saleInfoInterface,
  accessInfo: accessInfoInterface,
  searchInfo: searchInfoInterface,
}
