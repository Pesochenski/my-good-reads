import { epubInterface, pdfInterface } from "./additionalInterfaces/accessInfoInterfaces";
import { offerInterface, priceInterface } from "./additionalInterfaces/saleInfoInterfaces";
import { 
  imageLinksInterface, 
  industryIdentifiersInterface, 
  panelizationSummaryInterface, 
  readingModesInterface 
} from "./additionalInterfaces/volumeInfoInterfaces";

export interface volumeInfoInterface {
  title: string,
  authors: Array<string>,
  publisher: string,
  publishedDate: string,
  description: string,
  industryIdentifiers: Array<industryIdentifiersInterface>,
  readingModes: readingModesInterface,
  pageCount: number,
  printType: string,
  categories: Array<string>,
  averageRating: number,
  ratingsCount: number,
  maturityRating: string,
  allowAnonLogging: boolean,
  contentVersion: string,
  panelizationSummary: panelizationSummaryInterface,
  imageLinks: imageLinksInterface,
  language: string,
  previewLink: string,
  infoLink: string,
  canonicalVolumeLink: string,
}

export interface saleInfoInterface {
  country: string,
  saleability: string,
  isEbook: boolean,
  listPrice: priceInterface,
  retailPrice: priceInterface,
  buyLink: string,
  offers: Array<offerInterface>,
}

export interface accessInfoInterface {
  country: string,
  viewability: string,
  embeddable:boolean,
  publicDomain: boolean,
  textToSpeechPermission: string,
  epub: epubInterface,
  pdf: pdfInterface,
  webReaderLink: string,
  accessViewStatus: string,
  quoteSharingAllowed: boolean,
}

export interface searchInfoInterface {
  textSnippet: string,
}