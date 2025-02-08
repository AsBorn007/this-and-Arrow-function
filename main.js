const user = {
    username : "Praveen",
    age:26,
   
    letShowMessege: function (){
        console.log(`${this.username}, we welcome you `)
        console.log(this)  // this give use context of this fuction 
    }
   
}
user.letShowMessege();   // right now it retun the current context are in the user  and user name Praveen 

user.username = "ASborn"; // this time we change the  current context of this username form  user object 

user.letShowMessege();// right now it retun the current context are in the user  and user name Asborn 