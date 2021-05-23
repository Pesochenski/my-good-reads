import React from 'react';
import { WishlistItemProps } from '../../interfaces/propsInterfaces';
import '../../styles/wishlistItem.scss';

export default function WishlistItem(props: WishlistItemProps) {
  return (
    <div 
      className="wishlist__item"
      >
        <img 
        className="wishlist__item-thumbnail"
        src={props.item.volumeInfo.imageLinks?.smallThumbnail} 
        alt="book"
        />
        <div>
          <h2 className="wishlist__item-title">
            {props.item.volumeInfo.title}
          </h2>
          <h3 className="wishlist__item-authors">
            {props.item.volumeInfo.authors?.join(', ')}
          </h3>
        </div>
        <button 
        className="wishlist__item-btn"
        onClick={() => props.deletingFunc(props.item.id)}
        >
          Delete
        </button>
      </div>
  );
};