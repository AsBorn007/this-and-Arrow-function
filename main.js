// // const user = {
//     username : "Praveen",
//     age:26,
   
//     letShowMessege: function (){
//         console.log(`${this.username}, we welcome you `)
//         console.log(this)  // this give use context of this fuction 
//     }
   
// }
// user.letShowMessege();   // right now it retun the current context are in the user  and user name Praveen 

// user.username = "ASborn"; // this time we change the  current context of this username form  user object 

// user.letShowMessege();// right now it retun the current context are in the user  and user name Asborn 

//We use (this) is objects not use in funtions
//for expale we ceatea a object user in that object our this method work but in funtion is not working when we try to console the user value in funtion let me explaon mor precissly in example

function user(){
      let  username = "Takuza"    // if we remove let variable and simply we use username then using this.username method return value takuza  

    console.log(this.username) // when we store value in variable and try to console that value using this method in the console this give use undefin ed value 
    // console.log(this)  // this give user many other fucntion and value in  keu ana value pair 

}
user()

//Arrow funtions
// Return empty prenthesis When we try to console.log(this)
// ====================================================

// const newArrow = () => {
//     console.log(this)  // this give use undefine
// }

const newArrow = () => {
    let  username = "Takuza"    // if we remove let variable and simply we use username then using this.username method return value takuza  

    console.log(this)
}
newArrow()  /// this give use result {}==empty prenthisis