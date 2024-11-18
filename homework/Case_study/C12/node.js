class Student {
    constructor(studentId, name, className, email, birthdate, module) {
        this.studentId = studentId;
        this.name = name;
        this.className = className;
        this.email = email;
        this.birthdate = birthdate;
        this.module = module;
    }
}
let students = [
    new Student("HV-0001", "Nguyễn Văn A", "C1022G1", "nguyenvana@gmail.com", "01/01/2004", "1"),
    new Student("HV-0002", "Nguyễn Văn B", "C1122G1", "nguyenvanb@gmail.com", "02/02/2004", "1"),
    new Student("HV-0003", "Nguyễn Thị C", "C1222G1", "nguyenthic@gmail.com", "03/03/2004", "1")
];
function showStudents() {
    let tableString = `<table>
                              <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Email</th>
                                <th>Birthdate</th>
                                <th>Module</th>
                              </tr>`;
    for (let i = 0; i < students.length; i++) {
        tableString += `<tr>
                              <td><i>${students[i].studentId}</i></td>
                              <td>${students[i].name}</td>
                              <td>${students[i].className}</td>
                              <td>${students[i].email}</td>
                              <td>${students[i].birthdate}</td>
                              <td>${students[i].module}</td>
                            </tr>`;
    }
    tableString += `</table>`;
    document.getElementById("show").innerHTML = tableString;
}
function newId() {
    let newIDNumber = students.length + 1;
    let newId = "HV-" + ("000" + newIDNumber).slice(-4);
    for (let i = 0; i < students.length; i++) {
        if (students[i].studentId === newIDNumber) {
            newIDNumber++;
            newId = "HV" + ("000" + newIDNumber).slice(-4);
        }
    }
    return newId
}
function addStudent() {
    const studentId = newId();
    let name = prompt("Enter Student Name");
    while(!name || name.length > 50) {
        alert("Enter a valid Student Name");
        name = prompt("Enter Student Name again");
    }
    const className = prompt("Enter Student ClassName");
    const email = prompt("Enter Student Email");
    const birthdate = prompt("Enter Student Birthdate");
    let module = parseInt(prompt("Enter Student Module"));
    while (module > 6 || module < 1 || module % 1 !== 0 || isNaN(module)) {
        alert("Invalid module")
        module = parseInt(prompt("Enter Student Module again"));
    }
    if (studentId && name && className && email && birthdate && module) {
        students.push(new Student(studentId, name, className, email, birthdate, module));
    } else {
        alert("Insufficient Students information");
    }
    showStudents()
}
function findStudent(id){
    for (let i = 0; i < students.length; i++) {
        if (students[i].studentId === id) {
            return i;
        }
    }
    alert("No student found");
    return null;
}
function removeStudent() {
    let id = prompt("Enter Student ID you want to delete");
    let index = findStudent(id);
    if (index !== null) {
        if (confirm(`Are you sure you want to delete ${students[index].name}?`)) {
            students.splice(index, 1);
            showStudents();
            alert("Done")
        }
    }
}
function editStudent() {
    let id = prompt("Enter Student ID you want to edit");
    let index = findStudent(id);
    if (index !== null) {
        students[index].name = prompt("Enter Student Name again");
        students[index].className = prompt("Enter Student ClassName again");
        students[index].email = prompt("Enter Student Email again");
        students[index].birthdate = prompt("Enter Student Birthdate");
        students[index].module = prompt("Enter Student Module");
        showStudents();
        alert("Edits completed")
    }
}
showStudents();