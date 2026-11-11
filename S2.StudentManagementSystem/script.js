
let students = [];

document.getElementById("studentForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    // Get student details
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    // Create student object
    let student = {
        name: name,
        roll: roll,
        department: department,
        year: year
    };

    // Add student to array
    students.push(student);

    // Display students
    displayStudents();

    // Clear form
    document.getElementById("studentForm").reset();
});

function displayStudents() {

    let output = "";

    students.forEach(function(student, index) {

        output += `
        <tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.department}</td>
            <td>${student.year}</td>
            <td>
                <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("studentList").innerHTML = output;
}

// Delete student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}
