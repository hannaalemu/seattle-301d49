CREATE TABLE bookshelves (id SERIAL PRIMARY KEY, name VARCHAR(255));
-- Query 1: Create bookshelves table --

INSERT INTO bookshelves(name) SELECT DISTINCT bookshelf FROM books;
-- Query 2:  Select distinct bookshelves from the books table and insert into the bookshelves table --

ALTER TABLE books ADD COLUMN bookshelf_id INT;
-- Query 3: Alter the books table to include a field for bookshelf id --

UPDATE books SET bookshelf_id=shelf.id FROM (SELECT * FROM bookshelves) AS shelf WHERE books.bookshelf = shelf.name;
-- Query 4: Retrieves the primary key on each bookshelf and fills in the bookshelf id field in the books table --

ALTER TABLE books DROP COLUMN bookshelf;
-- Query 5: Retrieves the primary key on each bookshelf and fills in the bookshelf id field in the books table --

ALTER TABLE books ADD CONSTRAINT fk_bookshelves FOREIGN KEY (bookshelf_id) REFERENCES bookshelves(id);
-- Query 6: Set the bookshelf_id as the foreign key of the books table --
