curl http://127.0.0.1:5984/

curl -X GET http://admin:couchdb@127.0.0.1:5984/_all_dbs

curl -X PUT http://admin:couchdb@127.0.0.1:5984/test2

curl -X GET http://admin:couchdb@127.0.0.1:5984/_all_dbs

curl -X PUT http://admin:couchdb@127.0.0.1:5984/test2/6e1295ed6c29495e54cc05947f18c8af `
    -d '{"title":"There is Nothing Left to Lose","artist":"Foo Fighters"}'

curl -H 'Content-Type: application/json' `
    -X POST http://admin:couchdb@127.0.0.1:5984/test2/_find `
    -d '{"selector":{"_id":{"$regex": "^6e1.*"}}}'

curl -X DELETE http://admin:couchdb@127.0.0.1:5984/test2

curl -X GET http://admin:couchdb@127.0.0.1:5984/_all_dbs
