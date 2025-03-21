data = {
    "store": {
        "book": [
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
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95
        }
    }
}

print(data["store"])

print("=================================")
print(type(data["store"]), type(data["store"]["book"]))

print("=================================")
print(data["store"]["book"][2]["title"]) # Moby Dick
