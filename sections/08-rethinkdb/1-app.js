// Execute cell by cell in Data Explorer (the code is in JavaScript)

r.dbCreate('store')
r.dbList()

r.db('store').tableCreate('books')
r.db('store').tableList()

r.db('store').table('books')
  .insert([
    {
        "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95,
        "editions": [1993, 1995, 1998]
    },
    {
        "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99,
        "editions": [1996, 1998]
    },
    {
        "category": "fiction",
        "author": "Herman Melville",
        "title": "Moby Dick",
        "isbn": "0-553-21311-3",
        "price": 8.99,
        "editions": [1991, 1996, 1998]
    },
    {
        "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8",
        "price": 22.99
    },
    {
        "category": "software",
        "authors": [
            { "author": "Thomas Linn" },
            { "author": "Jane Mathews" }
        ],
        "title": "Snowflake for Beginners",
        "price": 12.49,
        "editions": [1996]
    }
])
r.db('store').table('books')
  
r.db('store').table('books').count()
r.db('store').table('books')
    .group('category').count()

r.db('store').table('books')
    .filter(r.row('price').gt(10))
    .pluck('title', 'price')

r.db('store').table('books')
    .filter(r.row('price').gt(10))
    .update({ 'price': 50 })

// update with actual ID
r.db('store').table('books')
    .filter(r.row('title').eq("Snowflake for Beginners"))
    .replace({
        "id": "a15a5fb8-c791-4e0c-99e9-92b875b6fdeb",
        "category": "software",
        "author": "Thomas Linn",
        "title": "Snowflake for Beginners",
        "price": 12.49,
        "editions": [1996]
    })

r.db('store').table('books')
    .filter(r.row('price').gt(10))
    .delete()

r.db('store').tableDrop('books')
r.dbDrop('store')

r.db('store').table('books')