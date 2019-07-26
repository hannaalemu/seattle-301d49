DROP TABLE IF EXISTS books,bookshelves;

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  isbn VARCHAR(255),
  image_url VARCHAR(255),
  description TEXT,
  bookshelf VARCHAR(255)
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'Dune',
  'Frank Herbert',
  'ISBN_13 9780441013593',
  'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'Paul Atreides, treacherous planet',
  'Fantasy'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'What Alice Forgot',
  'Liane Moriarty',
  'ISBN_13 1101515376',
  'http://books.google.com/books/content?id=8iBGzeqj45YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'Alice has a good time.',
  'Fiction'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'Unsouled',
  'Will Wight',
  'ISBN_13 9780989671767',
  'http://books.google.com/books/content?id=OjYJtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  'Souls and forces.',
  'SciFi'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'The Stand',
  'Stephen King',
  'ISBN_13 9780385528856',
  'http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'Good and evil fight',
  'Drama'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'Sweet Thursday',
  'John Steinbeck',
  'ISBN_13 978144063549',
  'http://books.google.com/books/content?id=zer-bEoDL-EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'Days of the week fight',
  'Classics'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'The New Jim Crow',
  'Michelle Alexander',
  'ISBN_13 9781595588197',
  'http://books.google.com/books/content?id=reDzBZ3pXqsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'Barack Obamas book',
  'Culture'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'The Boys in the Boat',
  'Daniel James Brown',
  'ISBN_13 9781101622742',
  'http://books.google.com/books/content?id=2p3YPpiA2pEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'A mans quest during the depression',
  'Inspirational'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'The Fellowship of the Ring',
  'John Ronald Reuel Tolkien',
  'ISBN_13 9780007522903',
  'http://books.google.com/books/content?id=f3q6mwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  'Middles earth fights Sauron',
  'Fantasy'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'Animal Farm',
  'George Orwell',
  'ISBN_13 9780573605383',
  'http://books.google.com/books/content?id=T0L2nUOPUqAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  'Totalitarianism and disillusionment',
  'Satire'
);

INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES (
  'The Great Gatsby',
  'Francis Scott Fitzgerald',
  'ISBN_13 9786050418156',
  'http://books.google.com/books/content?id=meVxCwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  'A bunch of kids behave badly',
  'Classics'
);
