$ ( document ).ready( onReady );

function onReady(){
    $( '#submitButton' ).on( 'click', submitEmployee );
    $(`#employeeTable`).on(`click`, `#delete`, deleteEmployee);
} // end onReady

let employees = [];
let salarySum = 0;

function deleteEmployee(){
    console.log(`delete button pressed`)
    $(this).parent().parent().remove()
}

function submitEmployee(){
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        title: $('#titleIn').val(),
        salary: $('#salaryIn').val()
    }
    employees.push(employee);
    $(`#employeeTable`).append(
        `<tr>
            <td id="firstNameTable">${employee.firstName}</td>
            <td id="lastNameTable">${employee.lastName}</td>
            <td id="idTable">${employee.idNumber}</td>
            <td id="titleTable">${employee.title}</td>
            <td id="salaryTable">${employee.salary}</td>
            <td id="deleteButtonTable"><button id="delete">Delete</button></td>
        </tr>`
    )
    salarySum += ((employee.salary)/12);
    $(`#salarySum`).empty().append(`Salary Sum: ` + salarySum.toFixed(2));
} // end submitEmployee


