SELECT * FROM book

SELECT *
FROM book
ORDER BY title
LIMIT 100

SELECT *
FROM book
WHERE title IN ARRAY('Sword of Honour', 'Moby Dick')
ORDER BY title
LIMIT 100

AGGREGATE COUNT(*) AS total
OVER (SELECT * FROM book)

AGGREGATE COUNT(*) AS total
OVER (
    SELECT * FROM book
    LIMIT 2 OFFSET 1
)