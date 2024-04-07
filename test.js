let a = [3, 5, 7, 9];
let b = [5, 7, 1, 6]

// let obj = {};
// for (let i = 0; i < a.length; i++) {
//     obj[a[i]] = a[i]
// }

// for (let i = 0; i < b.length; i++) {
//     obj[b[i]] = b[i]
// }

// let temp = [];
// for (let key in obj) {
//     temp.push(obj[key]);
// }
// console.log(obj,temp);


function Name(name){
    this.name=name;
}

Name.prototype.testname=function(){
    return 'test2'
}

let name1=new Name('test');

console.log(name1.testname());


class Job{
   constructor(name){
    this.name=name;
   }

   testJob(){
    return 'job2'
   }
}

let job=new Job('1');
console.log(job.testJob());