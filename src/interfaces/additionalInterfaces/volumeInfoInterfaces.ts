export interface industryIdentifiersInterface {
  type: string,
  identifier: string,
}
export interface readingModesInterface {
  text: boolean,
  image: boolean,
}
export interface panelizationSummaryInterface {
  containsEpubBubbles: boolean,
  containsImageBubbles: boolean,
}
export interface imageLinksInterface {
  smallThumbnail: string,
  thumbnail: string,
}