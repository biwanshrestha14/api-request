// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Hello Universe');
//         resolve()
//     },1000)

// })
// promiseOne.then(()=>{
//     console.log('Yes! You are on a right path. Keep going')
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Hello Universe');
//         resolve() 
//         },1000)
// }).then(function(){
//     console.log('hello world');
// })

// const promiseThree = new Promise(function(resolve,reject){
// setTimeout(() => {
//     console.log('hello world');
//     resolve({name:'biwan',gmail:'biwanshrestha77@gmail.com'})
// }, 1000);

// }).then(function(user){
// console.log(user.name);
// })





// const promiseFour= new Promise((resolve,reject)=>{
// setTimeout(() => {
//     console.log('Hello ji kese ho aaap!')
//     resolve({name:'Parbati',age:50,gmail:'parbati@gmail.com'})
// }, 1000);
// }).then((user)=>{
// console.log(user.name);
// })


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const error= false
//         if(!error){
//             resolve({name:'biwan',age:19,level:'Bachelore',gmail:'biwanshrestha77@gmail.com'})
//         }
//         else {
//             reject('error');
//         }
       
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     return user.name
// }).then((name)=>{
// console.log(name);
// }).catch((err)=>{
//     console.log(err);
// })


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const error= true
        if(!error){
            resolve({name:'Hitesh',age:30,level:'Graduated',gmail:'hitesh@gmail.com'})
        }
        else {
            reject('Error! Js went wrong');
        }
       
    }, 1000);
})

async function consumePromiseFour(){

    try {
   const response = await promiseFour
   console.log(response.age)
    
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFour()