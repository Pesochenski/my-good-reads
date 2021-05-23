import { bookInterface } from "./resInterface";

export interface innerProps {
  wished: bookInterface[],
  setWished: (wished: bookInterface[]) => void
}