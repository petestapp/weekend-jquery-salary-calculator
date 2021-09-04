console.log(`js`);

$ ( document ).ready( onReady );

function onReady(){
    console.log(`jq`);
    $( '#submitButton' ).on( 'click', submitEmployee );
}

// //The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.///
// <input type="text" name="firstName" id="firstNameIn" placeholder="First Name">
// <input type="text" name="lastName" id="lastNameIn" placeholder="Last Name">
// <input type="text" name="idNumber" id="idNumberIn" placeholder="ID">
// <input type="text" name="title" id="titleIn" placeholder="Title">
// <input type="text" name="salary" id="salaryIn" placeholder="Annual Salary">
// <button id="submitButton">Submit</button>
function submitEmployee(){
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let title = $('#titleIn').val();
    let salary = $('#salaryIn').val();
    let el = $('#testResults');
    el.empty();
    el.append(firstName + ` ` + lastName);
}

