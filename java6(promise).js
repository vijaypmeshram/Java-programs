console.log("we are connected");

// promises
/*
function fun1() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
        const error = false;
        if(!error){
            console.log("the promis has been resloved");
            resolve();
        } else
        {
            console.log("the promise is rejected");
            reject();
        }
        }, 5000)
    });
}

fun1().then(()=>{
    console.log("the promise is resolved");
}).catch((error)=>{
    console.log("the promise not fullfilled due to some " + error)
});
*/

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
];

function enrollStudents(student){
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           students.push(student);
           console.log("student is enrolled")
           const error = false;
           if(!error){
               resolve();
           } else {
               reject();
           }
       }, 1000);
   });
}

function getStudents(){
    setTimeout(()=>{
        let str= "";
        students.forEach((student)=>{
            str +- `<li> ${student.name}</li>`
        })
        document.getElementById("students").innerHTML = str;
        console.log("student has been fetched");
        
    }, 3000);
};

let newStudent = {name:"Vijay", subject:"python"}
enrollStudents(newStudent).then(getStudents).catch((error)=>{
    console.log("Student not enrolled due to some error")
});