import { bookInterface } from "./resInterface";

export interface innerProps {
  wished: bookInterface[],
  setWished: (wished: bookInterface[]) => void
}

export interface BookItemProps {
  item: bookInterface,
  wished: bookInterface[],
  setWished: (wished: bookInterface[]) => void,
  setErr: (err: string | null) => void,
};

export interface WishlistItemProps {
  item: bookInterface,
  deletingFunc: (id: string) => void,
}