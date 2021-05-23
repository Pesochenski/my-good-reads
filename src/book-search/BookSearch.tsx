import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import { bookInterface, responseInterface } from "../interfaces/resInterface";
import { innerProps } from "../interfaces/propsInterfaces";
import BookItem from "./book-search-item";

export default function BookSearch(props: innerProps): JSX.Element {
  const [bookType, setBookType] = useState<string>("");
  const [bookTypeToSearch, setBookTypeToSearch] = useState<string>("");
  const [allAvailableBooks, setAllAvailableBooks] = useState<responseInterface>({kind: "", totalItems: 0, items: []});
  const [err, setErr] = useState<string | null>(null);

  async function requestBooks() {
    if (bookTypeToSearch) {
      const allBooks = await getBooksByType(bookTypeToSearch);
      setAllAvailableBooks(allBooks);
    }
  }
  useEffect(() => {
    async function getAllBooks(): Promise<void> {
      await requestBooks();
    }
    getAllBooks();
  }, [bookTypeToSearch]);

  function liveRequestBooks(): void {
    if (bookTypeToSearch !== bookType && bookType.trim()) {
      setTimeout(() => setBookTypeToSearch(bookType), 500);
    }
  }
  useEffect(() => {
    liveRequestBooks();
  }, [bookType]);

  function errTurnOff(): void {
    if (err) {
      setTimeout(() => setErr(null), 3000);
    };
  };
  useEffect(() => {
    errTurnOff()
  }, [err]);

  return (
      <div className="book-container">
        <div className="book-container__search-params">
          <div>
            <form
              onSubmit={(e) => {
                debugger;
                e.preventDefault();
                setBookTypeToSearch(bookType)
              }}
            >
              <input
                className="book-container__input"
                autoFocus
                name="gsearch"
                type="search"
                value={bookType}
                placeholder="Search for books to add to your reading list and press Enter"
                onChange={e => setBookType(e.target.value)}
              />

              {
                err ? 
                <p className="book-container__error">{err}</p> : 
                null
              }
            </form>
        </div>
      </div>
        <div className="book-container__content">
          {
          allAvailableBooks.items?.length ? (allAvailableBooks.items.map((item: bookInterface) => (
            <BookItem 
            key={item.id}
            item={item} 
            setErr={setErr} 
            wished={props.wished} 
            setWished={props.setWished} 
            />
          ))) : (
            <div className="book-container_empty">
              <p>Sorry, didn't found any books yet</p>
              <p className="book-container_empty-small">
                But you can try searching for a topic, for example
                <a 
                  onClick={() => {
                    setBookType("Javascript");
                  }}
                >
                  {" "}
                  "Javascript"
                </a>
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
};
