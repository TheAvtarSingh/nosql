//only left joins works
// aggregation - $lookup
// {
//     $lookup : {
//         from : collection to join,
//         localField : input field to join / primary key,
//         foreignField : field of collection to join,
//         as : output array field
//     }
// }
// It will map the localField and foreignField and print as ouput


db.users.aggregate([
    {
        $project:{
            name:1,
            email:1,
            city:1
        }
    },{
        $lookup:{
            from : "cart",
            localField : "email",
            foreignField:"email",
           as: "output"
        }
    }
])

db.users.aggregate([
    {
        $project : {
            name : 1,
            email : 1,
            city : 1,
        }
    },
    {
        $lookup : {
            from : "cart",
            localField : "email",
            foreignField : "email",
            as : "output"
        }
    },
    {
        $lookup : {
            from : "products",
            localField : "output.items.product_id",
            foreignField : "p_id",
            as : "output_2"
        }
    }
])


db.cart.aggregate([
    {
        $project:{
            email:1,
            items:1
        }
    },{
        $lookup:{
            from:"products",
            localField:"items.product_id",
            foreignField:"p_id",
            as:"Ouput_3"
        }
    }
])

