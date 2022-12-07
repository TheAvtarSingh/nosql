// Basically Join - Group values from multiple documents together. Perform operations on the grouped data to return a single result. Analyze data changes over time.

// Find persons whose gender is male

db.personsCollection.aggregate([
    {$match:{
        gender:"male"
    }}
])

// group the persons on the basis of gender and show their sum
db.personsCollection.aggregate([
    {
        $group:{
            _id:{
                gender:"$gender"
            },
            total : {
$sum:1,
$count:1
            }
        }
    }
])

//Group on multiple basis
db.personsCollection.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            name : 1,
            gender : 1
        }
    }
])

// Group and print complete Name

db.personsCollection.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            gender : 1,
            fullName : {
                $concat : ["$name.title",". " , "$name.first", " ", "$name.last"]
            }
        }
    }
])

//Print in case
db.personsCollection.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            gender : 1,
            fullName : {
                $concat : [
                    {$toUpper : "$name.title"}, ". ",
                    {$toUpper : "$name.first"}, " ",
                    {$toUpper : "$name.last"}
                ]
            }
        }
    }
])

// for only first Capital letter
db.personsCollection.aggregate([
    {
        $match : {
            gender : "male"
        }
    },
    {
        $project : {
            _id : 0,
            gender : 1,
            fullName : {
                $concat : [
                    {
                        $toUpper : {$substrCP : ["$name.title", 0, 1]}
                    },
                    {
                        $substrCP : [
                            "$name.title" , 1, 
                            {
                                $subtract : [{$strLenCP : "$name.title"}, 1]
                            }
                        ]
                    },
                    ". ",
                    {
                        $toUpper : {$substrCP : ["$name.first", 0, 1]}
                    },
                    {
                        $substrCP : [
                            "$name.first" , 1, 
                            {
                                $subtract : [{$strLenCP : "$name.first"}, 1]
                            }
                        ]
                    },
                    " ",
                    {
                        $toUpper : {$substrCP : ["$name.last", 0, 1]}
                    },
                    {
                        $substrCP : [
                            "$name.last" , 1, 
                            {
                                $subtract : [{$strLenCP : "$name.last"}, 1]
                            }
                        ]
                    }
                ]
            }
        }
    }
])