db.students.insertOne({
    "_id":1,
    "name":{
        "firstName" : "john",
        "lastName" : "doe"
    },
    "address" : {
        "city" : "Gurugram",
        "state" : "Haryana",
        "country" : "India"
    },
    "marks" : [90,56,77]

})


// $ : to update first Occurance only even if you may use UpdateMany or UpdateOne
// :: It need Position i.e.  _id:2,marks:70

db.students.updateOne(
    {
        _id:2,marks:70
    },{
        $set:{
            "marks.$":80
        }
    }
)
// $[] : will update complete Array
// :: It need Position i.e.  _id:2,marks:70

db.students.updateOne(
    {
        _id:2,marks:70
    },{
        $set:{
            "marks.$[]":80
        }
    }
)

// $addToSet : Only unqiue :: will not enter if already present
// Not positional
db.students.updateOne(
    {_id:2},{
        $addToSet:{
            marks:80
        }
    }
)


// $push : To add an Element in Right

db.students.updateOne(
    {
        _id:2
    },{
        $push:{
            "marks":78
        }
    }
)

// Push and don"t make a nested array add in existing array

db.students.updateOne(
    {
        _id:1
    },{
        $push:{
            "marks":{
                $each:[70,88,90]
            }
        }
    }
)


// pop - Remove from right
db.students.updateOne(
    {_id : 1},
    {$pop : {
        "marks" : 1
    }}
)

// Pop : remove from left
db.students.updateOne(
    {_id : 1},
    {$pop : {
        "marks" : -1
    }}
)


// Inserting again


db.students.updateOne({
    _id:2
},{
    $set:{name:{
        "firstname" : "Kunal",
        "lastname" : "Sharma"
    },address: {
        "city" : "Gurugram",
        "state" : "Haryana",
        "country" : "India"
    },marks: [78,86,70]
}
})

//Pull :  To take out the elements,as secified in condition
db.students.updateOne({
    _id:1
},{
   $pull:{
    "marks":{
        $lte:90
    }
   } 
}
)


// Pull as per condition but all

db.students.updateOne(
    {_id : 3},
    {$pullAll : {
        "marks" : [60]
    }}
)

// to maintain the elements : it will remove as the old elements and placed the new elements at the indexes
//Delete from left and add the elements
db.students.updateOne(
    {_id : 1},
    {$push : {
        "marks" : {
            $each : [99,100],
            $slice : -3
        }
    }}
)
//Delete from right and add the elements
db.students.updateOne(
    {_id : 1},
    {$push : {
        "marks" : {
            $each : [80,88],
            $slice : 2
        }
    }}
)

// Insert at a position
db.students.updateOne(
    {_id : 2},
    {$push : {
        "marks" : {
            $each : [99,91],
            $position : 2
        }
    }}
)

// Update on a specific index
db.students.update(
    {_id : 2},
    {$set : {"marks.1" : 22}}
)