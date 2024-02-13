// // const amount = 9

// // if(amount<10){
// //     console.log("small number");

// // }
// // else{
// //     console.log("large number");
// // }

// // console.log(`hey its my first node program`);

// // console.log(__dirname);

// // setInterval(()=>{


// //     console.log("hello world");
// // }, 1000)




// //  modules  

// // const names = require(`./var`)
// // const sayHi = require(`./fun`)

// // console.log(names);



// // sayHi(`sami`)
// // sayHi(names.jonathan)
// // sayHi(names.alexa)


// // const man = require(`./alternate`)

// // console.log(man);


// // require(`./sum`)

// // console.log();




// //  Operating System Modules

// // invoke in main file like here im doing it in app.js

// const os = require(`os`)

// // info about current user 

// const user = os.userInfo()

// console.log(user);


// // method return the system uptime in seconds

// console.log(`the system uptime is : ${os.uptime} seconds`);



// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMemory: os.totalmem(),
//     freeMemory: os.freemem
// }

// console.log(currentOS
//     );



    // PATH MODULES 


    // FS MODULES 

        //   (a) => synch
        //   (b) => asynch




// //  Http Modules

// const http = require(`http`)

// const server = http.createServer(( req, res) =>{
//     // res.write("welcome to the Home page of our website")
//     if(req.url === "/"){
//         res.end("Its Home page Welcome")
//     }

//     if(req.url ==="/about"){
//         res.end("Welcome to the ABOUT section")
//     }
//     res.end(` <h1> Oops! </h1>
//     <p> something looks wrong </p>
//     <a href="/">back to Home</a>  `)
// })

// server.listen(5000)



//  packages

const _ = require("lodash")

const items = [1, [2, [3, [4, [5]]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);


