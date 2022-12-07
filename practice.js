// show all dbs

show db;

// create & switch

use practice_db;

// Check

db;

// drop

db.dropDatabase();

//Create Collection (Simple)
db.createCollection("name");

// Show Collections

show collections;

//Create Collection - Capped (with some restictions)

capped - T/F
size : int (bytes) //size of collection - On ineserting in overfilled collection previous data will be deleted

max : int //max documnets allowed in our collection (same property as above)

 AutoIndexID : true (deprecated) //automatically creates index on id field

//  Created Example : 
 db.createCollection("users",{capped:true,size:10000,max:10000});

//  Check for capped collection ; 
 db.users.isCapped();
true

// drop collection
db.users.drop();

// Insert  Document in Collection
 db.users.insert({"name" : "Avtar Singh","Roll No." : "20csu241","Class" : "FSB"});

// InsertMany
  
db.product.insertMany(
    [
        {
            "p_name" : "Apple Iphone 13",
            "p_price" : 80000,
            "p_brand" : "Apple",
            "p_category" : "Mobile",
            "p_details" : {
                "ram" : ["4GB","8GB","16GB"],
                "memory" : ["64 GB", "128 GB"],
                "color" : ["white", "gray", "silver", "gold"]
            }
            ,
            "discount" : 5
        },
        {
            "p_name" : "Apple Macbook Pro",
            "p_price" : 150000,
            "p_brand" : "Apple",
            "p_category" : "Laptop",
            "p_details" : {
                "ram" : ["8 GB", "16 GB", "32 GB"],
                "memory" : ["256 GB", "512 GB"],
                "color" : ["gray", "silver"]
            }
        },
    
        {
            "p_name" : "Adidas Shoes",
            "p_price" : 4000,
            "p_brand" : "Adidas",
            "p_category" : "Shoes",
            "p_details" : {
                "size" : [7,8,9,10],
                "color" : ["white", "gray", "black", "red"]
            },
            "discount" : 3,
            "offers" : ["offer_1", "offer_2", "offer_3"]
        },
    
        {
            "p_name" : "Puma Shoes",
            "p_price" : 3500,
            "p_brand" : "Puma",
            "p_category" : "Shoes",
            "p_details" : {
                "size" : [7,8,9,10],
                "color" : ["white", "gray", "black"]
            },
            "discount" : 5,
            "offers" : ["offer_1", "offer_2", "offer_3"]
        },
    
        {
            "p_name" : "Titan Smart Watch",
            "p_price" : 8000,
            "p_brand" : "Titan",
            "p_category" : "Watch",
            "p_details" : {
                "features" : ["heartbeat", "steps", "calories", "BMI"],
                "color" : ["white", "gray", "silver", "black", "pink"]
            },
            "discount" : 5
        }
    ]
);

// Find
db.product.find().pretty();

// Find with condition


db.product.find({"p_brand" : {$eq:"Titan"}}).pretty();

// Find with condition and projection Operator

 db.product.find({"p_brand" : {$eq:"Titan"}},{_id:0,"p_name":1,"p_price":1,"p_brand":1}).pretty();
//  Output
/* { "p_name" : "Titan Smart Watch", "p_price" : 8000, "p_brand" : "Titan" } */

// Find Gives all Finds
 db.product.find({"p_brand" : {$eq:"Apple"}},{_id:0,"p_name":1,"p_price":1,"p_brand":1}).pretty();

/* { "p_name" : "Apple Iphone 13", "p_price" : 80000, "p_brand" : "Apple" }
{ "p_name" : "Apple Macbook Pro", "p_price" : 150000, "p_brand" : "Apple" } */

// FindOne - First Occurance
 db.product.findOne({"p_brand" : {$eq:"Apple"}},{_id:0,"p_name":1,"p_price":1,"p_brand":1});
//  Output 
/* { "p_name" : "Apple Iphone 13", "p_price" : 80000, "p_brand" : "Apple" } */

// Update 
/* $set - to update
$unset - to delete */
// Update - Only Update First Occurance
 db.product.update({"p_brand" : {$eq : "Apple"}},{$set:{"p_price":81000}});

 db.product.find({"p_brand" : {$eq:"Apple"}},{_id:0,"p_name":1,"p_price":1,"p_brand":1}).pretty();

/* { "p_name" : "Apple Iphone 13", "p_price" : 81000, "p_brand" : "Apple" }
{ "p_name" : "Apple Macbook Pro", "p_price" : 150000, "p_brand" : "Apple" } */

// Update Many - For All
db.product.updateMany({"p_brand" : {$eq : "Adidas"}},{$set:{"p_price":8000}});

/* { "p_name" : "Adidas Shoes", "p_price" : 8000, "p_brand" : "Adidas" }
{ "p_name" : "Adidas Shoes", "p_price" : 8000, "p_brand" : "Adidas" } */

// $unset
 db.products.updateOne( { "p_brand": {$eq:"Adidas"} }, { $unset: { p_price: ""
} } )

 db.product.updateOne({"p_name" : "Puma Shoes" },{$unset : {"p_details.size[1]"
:null}});

// In the Index of Array
 db.product.updateOne({"p_name" : "Puma Shoes" },{$set : {"p_details.size.1":3}
});

// get Field
db.product.find({"p_name":"Adidas Shoes"},{"p_details.size":1}).pretty();

// In
db.product.find({"p_details.size":{$in:[8,9]}},{"p_details.size":1}).pretty();

// nin
 db.product.find({"p_details.size":{$nin:[8,9]}},{"p_details.size":1,"p_name":1
}).pretty();