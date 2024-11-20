class Worker {
    constructor(id, name, birthdate, adddress, salary, position) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.adddress = adddress;
        this.salary = salary;
        this.position = position;
    }
}
let workers = [
    new Worker("1", "Trương Tấn B", "11-11-1997", "Quảng Nam", "2000", "Abc"),
    new Worker("2", "Trương Tấn A", "11-11-1999", "Đà Nẵng", "2000", "Abc"),
    new Worker("3", "Trương Tấn C", "11-11-1999", "Huế", "2000", "Abc")
];
function sortWorker() {
    workers.sort((a, b) => a.name.localeCompare(b.name));
    showWorker()
}
function showWorker() {
    let tableString = `<table>
                              <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Birthdate</th>
                                <th>Address</th>
                                <th>Salary</th>
                                <th>Position</th>
                              </tr>`;
    for (let i = 0; i < workers.length; i++) {
        tableString += `<tr>
                              <td><i>${workers[i].id}</i></td>
                              <td>${workers[i].name}</td>
                              <td>${workers[i].birthdate}</td>
                              <td>${workers[i].adddress}</td>
                              <td>${workers[i].salary}</td>
                              <td>${workers[i].position}</td>
                            </tr>`;
    }
    tableString += `</table>`;
    document.getElementById("show").innerHTML = tableString;
}
showWorker()