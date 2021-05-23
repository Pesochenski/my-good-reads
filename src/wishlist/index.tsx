import React from 'react';
import { innerProps } from '../interfaces/propsInterfaces';
import { bookInterface } from '../interfaces/resInterface';
import '../styles/wishlist.scss';
import WishlistItem from './wishlistItem';

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
            <WishlistItem 
            key={item.id}
            item={item} 
            deletingFunc={deletingFunc}
            /> 
          )) : 
          <p className="wishlist_empty">
            Sorry, no any books here
          </p>
        }
      </div>
    </aside>
  )
}