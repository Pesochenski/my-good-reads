import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import { bookInterface, responseInterface } from "../interfaces/resInterface";
import { innerProps } from "../interfaces/propsInterfaces";

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
    if (bookTypeToSearch !== bookType) {
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
            <div 
            key={item.id} 
            className="book-container__item"
            >
              <img 
              className="book-container__thumbnail"
              src={item.volumeInfo.imageLinks?.smallThumbnail} 
              alt="book"
              /> 
              <div>
                <h1 
                className="book-container__item-title"
                >
                  {item.volumeInfo.title}
                </h1>
                <h2 
                className="book-container__item-authors"
                >
                  {item.volumeInfo.authors?.join(', ')}
                </h2>

                <p 
                className="book-container__item-description"
                >
                  {item.volumeInfo.description}
                </p>

                <div className="book-container__item-publish">
                  {
                    item.volumeInfo.publisher?.length ? 
                      <p 
                      className="book-container__item-publisher"
                      >
                        {item.volumeInfo.publisher}
                      </p> :
                    null
                  }
                  <p 
                  className="book-container__item-pub-date"
                  >
                    {item.volumeInfo.publishedDate?.split('-').join('.')}
                  </p>
                </div>
              </div>
              <button 
                className="book-container__item-btn"
                onClick={() => {
                !props.wished.includes(item) ? 
                props.setWished(props.wished.concat([item])) : 
                setErr('This book is already in your list')
                }}
              >
                Add
              </button>
            </div>
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
