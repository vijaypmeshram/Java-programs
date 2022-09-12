console.log("we are connected");


//create constructor to get data from server
let students = [
    {name:"vijay", age:27},
    {name:"raju", age:27}
]

function enrollstudents(student, callback){
    setTimeout(function() {
        //student enroll/add
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudent(){
    setTimeout(function(){
        //listeed students in UI
        let uistr = '';
        students.forEach(function(student){
         uistr += `<li> ${student.name}</li>` 
        });
        document.getElementById("students").innerHTML = uistr;
        console.log("students have been fetched");
    }, 3000)
}

let newStudent = {name:"munna", age:23};

enrollstudents(newStudent, getStudent);

