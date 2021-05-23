import React from 'react';
import { BookItemProps } from '../../interfaces/propsInterfaces';
import '../../styles/bookItem.scss';

export default function BookItem(props: BookItemProps): JSX.Element {
  return (
    <div  
      className="book-item"
      >
        <img 
        className="book-item__thumbnail"
        src={props.item.volumeInfo.imageLinks?.smallThumbnail} 
        alt="book"
        /> 
        <div>
          <h1 
          className="book-item__title"
          >
            {props.item.volumeInfo.title}
          </h1>
          <h2 
          className="book-item__authors"
          >
            {props.item.volumeInfo.authors?.join(', ')}
          </h2>

          <p 
          className="book-item__description"
          >
            {props.item.volumeInfo.description}
          </p>

          <div className="book-item__publish">
            {
              props.item.volumeInfo.publisher?.length ? 
                <p 
                className="book-item__publisher"
                >
                  {props.item.volumeInfo.publisher}
                </p> :
              null
            }
            <p 
            className="book-item__pub-date"
            >
              {props.item.volumeInfo.publishedDate?.split('-').join('.')}
            </p>
          </div>
        </div>
        <button 
          className="book-item__btn"
          onClick={() => {
          !props.wished.includes(props.item) ? 
          props.setWished(props.wished.concat([props.item])) : 
          props.setErr('This book is already in your list')
          }}
        >
          Add
        </button>
      </div>
  );
};
