import React from 'react';
import { innerProps } from '../interfaces/propsInterfaces';
import { bookInterface } from '../interfaces/resInterface';
import '../styles/wishlist.scss';

export default function Wishlist(props: innerProps): JSX.Element {
  function deletingFunc(id: string): void {
    props.setWished(props.wished.filter((item: bookInterface) => item.id !== id))
  }

  return (
    <aside className="wishlist">
      {
        props.wished.length ? 
        <h1 className="wishlist__title">
          Wishlist {props.wished.length}
        </h1> : 
        <h1 className="wishlist__title">Wishlist</h1>
      }
      <div className="wishlist__books">
        {
          props.wished.length ? props.wished.map((item: bookInterface) => (
            <div 
            key={item.id}
            className="wishlist__item"
            >
              <img 
              className="wishlist__item-thumbnail"
              src={item.volumeInfo.imageLinks?.smallThumbnail} 
              alt="book"
              />
              <div>
                <h2 className="wishlist__item-title">
                  {item.volumeInfo.title}
                </h2>
                <h3 className="wishlist__item-authors">
                  {item.volumeInfo.authors?.join(', ')}
                </h3>
              </div>
              <button 
              className="wishlist__item-btn"
              onClick={() => deletingFunc(item.id)}
              >
                Delete
              </button>
            </div>
          )) : 
          <p className="wishlist_empty">
            Sorry, no any books here
          </p>
        }
      </div>
    </aside>
  )
}