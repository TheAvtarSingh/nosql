                                                                                                                                         
Exercise : 1
Create a database for movies
   - Collection - movies
   - Collection - users

Movies Collection
- name, imdb_rating, release date, genres : [], 
  description : {summary : "...", star : [], directors : []}
  release_date : new Date("2021-8-12")
- Insert at least 10 documents

Users Collection
- name, emailId, 
  movies_watched : {count : 2, names : ["Avengers", "Thor"],
                    "rating" : [7.8, 8.9],
                    "review" : ["Good", "Amazing"]}

- Insert at least 5 documents

Queries
1- Find all movies directed by "XYZ".
2- Find movies whose rating is above 8.0
3- Find movies whose genre is action and comedy
4- Find movies whose genre is only action
5- Find movies whose review contains positive(good/best/awesome..) words
6- Find users who has watched more than 2 movies
7- Find users who has given 8 rating to Avengers Movies
8- Find users who has watched only 1 movie till now.
9- Find movies whose imdb rating is not greater than 8
10- Find movies where either imdb rating is above 8 or genre is action
11- Find movies where rating is above 8 and actor is "XYZ"
12- Find movies where summary contains word "power"
13- Find reviews from users collection where review contains bad words



Exercise : 2

Users
{
    id : 101
    name : "Ram"
    age : 30
    interest : ["cricket", "football", "Web Development"]
},
{
    id : 102
    name : "Shyam"
    age : 31
    interest : ["cricket", "football"]
}

Questions
{
   q_id : 101
   ques : {
	user_id : 101
	text : "Who is captain of Indian Cricket Team ?"
	interest : ["cricket", "sports"]
   }
}
{
   q_id : 102
   ques : {
	user_id : 101
	text : "Who is captain of Indian Football Team ?"
	interest : ["Football", "sports"]
   }
}


Answers 
{
    a_id : 1001
    ans : [ {
	   q_id : 101
	   u_id : 102
	   text : "Dhoni"
	   comments : ["No its kohli", "You know nothing"],
	   likes : 5
       },
	{
	   q_id : 101
	   u_id : 103
	   text : "Kohli"
	   comments : ["GOAT", "Yes you are right"],
	   likes : 15
       }
    ]
}

{
    a_id : 1001
    ans : [ {
	   q_id : 102
	   u_id : 102
	   text : "Dhoni"
	   comments : ["No its kohli", "You know nothing"],
	   likes : 5
       },
	{
	   q_id : 101
	   u_id : 103
	   text : "Kohli"
	   comments : ["GOAT", "Yes you are right"],
	   likes : 15
       }
    ]
}

$sum, $max, $min, $count


Queries
1. Get total likes on all answers posted by each user.
2. Get all the questions of cricket.
3. Get the answers where likes are more than 10
4. Get the count of questions asked by users.
5. Which question and answer got maximum likes ?
6. Which users has interest of football ?
7. How many questions are asked on any one interest ?


	