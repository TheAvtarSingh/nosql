Q1. db.movies.aggregate([{$match:{"description.directors":"director1"}}]);

db.movies.aggregate([{$match:{imdb_rating:{$gt:4}}}])

db.movies.aggregate([{$match:{$and:[{genres:"gener_1"},{genres:"gener_2"}]}}])

db.movies.aggregate([{$match:{$and:[{genres:"gener_1"}]}}])


db.users.aggregate([{$match:{"movies_watched.review":{$in:["Good","Moderate"]}}}]);


db.users.aggregate(
    [
        {
            $match:{
                $or:[{
                    "movies_watched.review":"Good"
            },{
                "movies_watched.review":"Moerate"
            }
        ]

                
            }
        }
    ]
)

db.users.aggregate([{$match:{"movies_watched.count":{$gt:2}}}]);


db.users.aggregate([{$match:{$and:[{"movies_watched.names":{$in:["name3"]}},{"movies_watched.ratings":{$in:[2]}}]}}]);