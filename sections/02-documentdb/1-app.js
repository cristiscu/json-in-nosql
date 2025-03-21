// see https://docs.aws.amazon.com/documentdb/latest/developerguide/get-started-guide.html
// show databases+collections
show collections
show databases

// create and explore "collection" collection
db.collection.insertOne({"hello":"DocumentDB"})
db.collection.findOne()

// show databases+collections
show collections
show databases

// create and explore "profiles" collection
db.createCollection("profiles")
db.profiles.insertMany([
    { _id: 1, name: 'Matt', status: 'active', level: 12, score: 202 }, 
    { _id: 2, name: 'Frank', status: 'inactive', level: 2, score: 9 }, 
    { _id: 3, name: 'Karen', status: 'active', level: 7, score: 87 }, 
    { _id: 4, name: 'Katie', status: 'active', level: 3, score: 27 }
])
db.profiles.find()
db.profiles.find({name: "Katie"})

// show databases+collections
show collections
show databases

// change collection data
db.profiles.findAndModify({
    query: { name: "Matt", status: "active"},
    update: { $inc: { score: 10 } }
})
db.profiles.find({name: "Matt"})

// cleanup
db.collection.drop()
db.profiles.drop()

// show databases+collections
show collections
show databases
