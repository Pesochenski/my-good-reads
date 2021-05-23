import React, { useState } from 'react';
import './styles/App.scss';
import './styles/tags.scss';
import BookSearch from './book-search/BookSearch';
import Wishlist from './wishlist';
import { bookInterface } from './interfaces/resInterface';

export default function App(): JSX.Element {
  const [wished, setWished] = useState<bookInterface[]>([]);

  return (
      <>
        <header className="header">
          <div className="header__content">
            <h1 className="header__title">My Good Reads</h1>
          </div>
        </header>
        <main>
          <BookSearch setWished={setWished} wished={wished}/>
          <Wishlist wished={wished} setWished={setWished}/>
        </main>
      </>
  );
}
