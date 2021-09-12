$ (document).ready(onReady);

function onReady(){
    $(`#submitButton`).on(`click`, submitEmployee);
    $(`#employeeTable`).on(`click`, `#delete`, deleteEmployee);
} // end onReady

let employees = [];
let salarySum = 0;

function checkSalary(){
    if (salarySum < 20000){
        $(`#salarySum`).removeClass("red");
    }
    else {
        $(`#salarySum`).addClass("red");
    }
}

function deleteEmployee(){
    let rawData = $(this).parent().parent().children(4).text();
    let yearSalaryToSubtract = 0;
    yearSalaryToSubtract = parseInt(rawData.slice(2, rawData.length-6));
    monthSalaryToSubtract = (yearSalaryToSubtract/12);
    salarySum -= monthSalaryToSubtract;
    $(this).parent().parent().remove();
    checkSalary();
    $(`#salarySum`).empty().append(`Total Monthly: $ ` + salarySum.toFixed(2));
}
// deleteEmployee() only works some of the time and seemingly randomly gives me "Total Monthly: $ NaN".
// I think it has something to do with me using the data from the text and not the object.
// How could I rewrite line 21 to set rawData to employee.object rather than the text in the table?

function submitEmployee(){
    let employee = {
        firstName: $(`#firstNameIn`).val(),
        lastName: $(`#lastNameIn`).val(),
        idNumber: $(`#idNumberIn`).val(),
        title: $(`#titleIn`).val(),
        salary: $(`#salaryIn`).val(),
    }
    employees.push(employee);
    $(`#employeeTable`).append(
        `<tr>
            <td id="firstNameTable">${employee.firstName}</td>
            <td id="lastNameTable">${employee.lastName}</td>
            <td id="idTable">${employee.idNumber}</td>
            <td id="titleTable">${employee.title}</td>
            <td id="salaryTable">$ ${employee.salary}</td>
            <td id="deleteButtonTable" style="text-align: center"><button id="delete">Delete</button></td>
        </tr>`
    )
    salarySum += ((employee.salary)/12);
    $(`#salarySum`).empty().append(`Salary Sum: $ ` + salarySum.toFixed(2));
    checkSalary();
    $(`.inputs`).val('')
} // end submitEmployee