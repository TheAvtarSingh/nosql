db.users.insertMany([
    {
        "name":"Avtar","email":"avtar20csu241@gmail.com",
        "name":"Sam","email":"sam23@gmail.com"
    }
])

db.users.createIndex({"emaiiil":1});