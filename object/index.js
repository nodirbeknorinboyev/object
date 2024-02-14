//let user = {
  //  name: 'Nodirbek',
   // location: 'Nurafshon',
    //age: 22
//};

//delete user.location;
//console.log(user);

//let adobject = {left: 1,}
//console.log(adobject.left);
//delete adobject.left;

//console.log("left" in adobject);

//user = {
  //  name: "Nodirbek",
    //age: 22,
    //email:"nodirbek@gmail.com",
    //location:"Toshkent",
    //hobbiy: ['read book', 'plastation'],
    //socialMedia:{
        //instagram: '@nodir_adilovich',
        //telegram: '@nodir_2208',
        //facebook: '@norinboyevnodir',
    //},
    //login:function(){
     //   console.log('bu yerda login func');
    //}
//} 
//user.login(); 

//let a = "Salom Dunyo";
//console.log(a.toUpperCase());
//let s = [1, 2, 3];

//let a = Object.keys(user);
//console.log(a);
//let obj1 = {message: 10}
//let obj2 = obj1;
//obj2.message = 12;
//console.log(obj1);

//const foodArray = [
  //{name: 'Pizza'},
   // {name: 'Burger'},
    //{name: 'Lavash'},
    //{name: 'Shourma'},
    //{name: 'Danar'},
//]

//for(let i = 0; i < foodArray.length; i++){
  //  console.log(`Food name: ${foodArray[i]}`)
//}
 // Eng yaxshi usul shu usuldan foydalanish kerak!

let oneArray = ['oq', 'qora', 'yashil', 'qizil']
let a = 10
for(let one of oneArray){
    console.log(one+ " " + a++);
}
for(let two in oneArray){
    console.log(two);
}